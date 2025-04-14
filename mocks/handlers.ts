import { http, HttpResponse, delay } from "msw";
import { mockWorkshops, calculateDistance } from "./data/workshops";
import { WorkshopPaginatedResponse } from "@/types/workshop";

function paginateWorkshops(
  workshops: typeof mockWorkshops,
  cursor?: string,
  limit: number = 10
): WorkshopPaginatedResponse {
  const startIndex = cursor ? workshops.findIndex((workshop) => workshop.id === cursor) + 1 : 0;

  if (startIndex === 0 && cursor) {
    return { workshops: [], nextCursor: null, hasMore: false };
  }

  const paginatedWorkshops = workshops.slice(startIndex, startIndex + limit);
  const hasMore = startIndex + limit < workshops.length;
  const nextCursor = hasMore ? paginatedWorkshops[paginatedWorkshops.length - 1].id : null;

  return {
    workshops: paginatedWorkshops,
    nextCursor,
    hasMore,
  };
}

export const getAllWorkshopsHandler = http.get("/api/workshops", async ({ request }) => {
  await delay(500);

  const url = new URL(request.url);
  const cursor = url.searchParams.get("cursor") || undefined;
  const limitParam = url.searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  const response = paginateWorkshops(mockWorkshops, cursor, limit);

  return HttpResponse.json(response);
});

export const getNearbyWorkshopsHandler = http.get("/api/workshops/nearby", async ({ request }) => {
  await delay(700);

  const url = new URL(request.url);
  const latParam = url.searchParams.get("lat");
  const lngParam = url.searchParams.get("lng");
  const radiusParam = url.searchParams.get("radius");
  const cursor = url.searchParams.get("cursor") || undefined;
  const limitParam = url.searchParams.get("limit");

  if (!latParam || !lngParam) {
    return new HttpResponse(JSON.stringify({ error: "위도(lat)와 경도(lng)는 필수 파라미터입니다." }), { status: 400 });
  }

  const latitude = parseFloat(latParam);
  const longitude = parseFloat(lngParam);
  const radius = radiusParam ? parseInt(radiusParam, 10) : 5000;
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  const nearbyWorkshops = mockWorkshops
    .filter((workshop) => {
      if (!workshop.location) return false;

      const distance = calculateDistance(latitude, longitude, workshop.location.lat, workshop.location.lng);

      return distance <= radius;
    })
    .sort((a, b) => {
      const distanceA = calculateDistance(latitude, longitude, a.location!.lat, a.location!.lng);

      const distanceB = calculateDistance(latitude, longitude, b.location!.lat, b.location!.lng);

      return distanceA - distanceB;
    });

  const response = paginateWorkshops(nearbyWorkshops, cursor, limit);

  return HttpResponse.json(response);
});

export const handlers = [getAllWorkshopsHandler, getNearbyWorkshopsHandler];
