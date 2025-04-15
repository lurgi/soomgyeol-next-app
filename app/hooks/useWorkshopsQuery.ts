"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Workshop, WorkshopPaginatedResponse } from "@/types/workshop";

interface LocationCoordinates {
  lat: number | null;
  lng: number | null;
  radius: number | null;
}

export type LocationType =
  | "전체"
  | "내 근처"
  | "홍대"
  | "강남"
  | "잠실"
  | "시청"
  | "성수"
  | "제주시"
  | "애월"
  | "서귀포"
  | "성산";

export const locations: LocationType[] = [
  "전체",
  "내 근처",
  "홍대",
  "강남",
  "잠실",
  "시청",
  "성수",
  "제주시",
  "애월",
  "서귀포",
  "성산",
];

const locationCoordinates: Record<LocationType, LocationCoordinates> = {
  전체: { lat: null, lng: null, radius: null },
  "내 근처": { lat: null, lng: null, radius: 5000 },

  홍대: { lat: 37.5563, lng: 126.922, radius: 5000 },
  강남: { lat: 37.4979, lng: 127.0276, radius: 5000 },
  잠실: { lat: 37.5133, lng: 127.1025, radius: 5000 },
  시청: { lat: 37.5665, lng: 126.978, radius: 5000 },
  성수: { lat: 37.5445, lng: 127.0566, radius: 5000 },

  제주시: { lat: 33.5046, lng: 126.4913, radius: 15000 },
  애월: { lat: 33.333069, lng: 126.320895, radius: 15000 },
  서귀포: { lat: 33.2541, lng: 126.5618, radius: 15000 },
  성산: { lat: 33.437569, lng: 126.80629, radius: 15000 },
};

async function fetchWorkshops(location: LocationType, userCoordinates?: GeolocationCoordinates): Promise<Workshop[]> {
  const params = new URLSearchParams();

  params.append("limit", "10");

  if (location === "전체") {
    const response = await fetch(`/api/workshops?${params}`);

    if (!response.ok) {
      throw new Error("워크샵 데이터를 불러오는데 실패했습니다.");
    }

    const data: WorkshopPaginatedResponse = await response.json();
    return data.workshops;
  } else {
    let latitude: number;
    let longitude: number;
    let radius: number | undefined;

    if (location === "내 근처") {
      if (!userCoordinates) {
        throw new Error("위치 정보를 가져올 수 없습니다.");
      }
      latitude = userCoordinates.latitude;
      longitude = userCoordinates.longitude;
    } else {
      const coordinates = locationCoordinates[location];
      if (!coordinates.lat || !coordinates.lng) {
        throw new Error("해당 위치의 좌표를 찾을 수 없습니다.");
      }
      latitude = coordinates.lat;
      longitude = coordinates.lng;
      if (!coordinates.radius) {
        throw new Error("해당 위치의 반경을 찾을 수 없습니다.");
      }
      radius = coordinates.radius;
    }

    params.append("lat", latitude.toString());
    params.append("lng", longitude.toString());
    if (radius) params.append("radius", radius.toString());

    const response = await fetch(`/api/workshops/nearby?${params}`);

    if (!response.ok) {
      throw new Error("주변 워크샵 데이터를 불러오는데 실패했습니다.");
    }

    const data: WorkshopPaginatedResponse = await response.json();
    return data.workshops;
  }
}

export function useWorkshopsQuery(location: LocationType, userCoordinates?: GeolocationCoordinates) {
  return useSuspenseQuery({
    queryKey: ["workshops", location, userCoordinates?.latitude, userCoordinates?.longitude],
    queryFn: () => fetchWorkshops(location, userCoordinates),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
