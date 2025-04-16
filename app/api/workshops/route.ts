import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { WorkshopPaginatedResponse } from "@/types/workshop";

const DEFAULT_LIMIT = 10;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const cursor = searchParams.get("cursor");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : DEFAULT_LIMIT;

    const workshops = await prisma.workshop.findMany({
      take: limit + 1,
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
      orderBy: {
        created_at: "desc",
      },
    });

    const hasMore = workshops.length > limit;
    const data = hasMore ? workshops.slice(0, limit) : workshops;

    const nextCursor = hasMore ? data[data.length - 1].id : null;

    const response: WorkshopPaginatedResponse = {
      workshops: data,
      nextCursor,
      hasMore,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("워크샵 목록 조회 중 오류 발생:", error);
    return NextResponse.json({ error: "워크샵 목록을 불러오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
