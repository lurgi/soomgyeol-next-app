import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { WorkshopPaginatedResponse } from "@/types/workshop";

const DEFAULT_LIMIT = 10;
const DEFAULT_RADIUS = 5000;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const latParam = searchParams.get("lat");
    const lngParam = searchParams.get("lng");

    if (!latParam || !lngParam) {
      return NextResponse.json({ error: "위도(lat)와 경도(lng)는 필수 파라미터입니다." }, { status: 400 });
    }

    const latitude = parseFloat(latParam);
    const longitude = parseFloat(lngParam);
    const radiusParam = searchParams.get("radius");
    const radius = radiusParam ? parseInt(radiusParam, 10) : DEFAULT_RADIUS;

    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : DEFAULT_LIMIT;

    const rawQuery = `
      WITH nearby_workshops AS (
        SELECT 
          w.*,
          ST_Distance(
            w.location::geography, 
            ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography
          ) as distance
        FROM workshop w
        WHERE ST_DWithin(
          w.location::geography,
          ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
          $3
        )
        ${cursor ? `AND w.id > $4` : ""}
        ORDER BY distance, w.created_at DESC
        LIMIT $${cursor ? "5" : "4"}
      )
      SELECT * FROM nearby_workshops
    `;

    const queryParams = cursor
      ? [longitude, latitude, radius, cursor, limit + 1]
      : [longitude, latitude, radius, limit + 1];

    const workshops = await prisma.$queryRawUnsafe(rawQuery, ...queryParams);

    const hasMore = workshops.length > limit;
    const data = hasMore ? workshops.slice(0, limit) : workshops;

    const nextCursor = hasMore && data.length > 0 ? data[data.length - 1].id : null;

    const response: WorkshopPaginatedResponse = {
      workshops: data,
      nextCursor,
      hasMore,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("주변 워크샵 검색 중 오류 발생:", error);
    return NextResponse.json({ error: "주변 워크샵을 검색하는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
