"use client";

import { useQuery } from "@tanstack/react-query";
import { Workshop, WorkshopPaginatedResponse } from "@/types/workshop";

interface LocationCoordinates {
  lat: number;
  lng: number;
}

export type LocationType = "전체" | "내 근처" | "수도권" | "제주";

const locationCoordinates: Record<string, LocationCoordinates> = {
  수도권: {
    lat: 37.5665,
    lng: 126.978,
  },
  제주: {
    lat: 33.4996,
    lng: 126.5312,
  },
};

async function fetchWorkshops(location: LocationType, userCoordinates?: GeolocationCoordinates): Promise<Workshop[]> {
  let url = "/api/workshops";
  const params = new URLSearchParams();

  if (location === "수도권" || location === "제주") {
    const coordinates = locationCoordinates[location];
    url = "/api/workshops/nearby";
    params.append("lat", coordinates.lat.toString());
    params.append("lng", coordinates.lng.toString());
  } else if (location === "내 근처" && userCoordinates) {
    url = "/api/workshops/nearby";
    params.append("lat", userCoordinates.latitude.toString());
    params.append("lng", userCoordinates.longitude.toString());
  }

  const response = await fetch(`${url}?${params}`);

  if (!response.ok) {
    throw new Error("워크샵 데이터를 불러오는데 실패했습니다.");
  }

  const data: WorkshopPaginatedResponse = await response.json();
  return data.workshops;
}

export function useWorkshopsQuery(location: LocationType, userCoordinates?: GeolocationCoordinates) {
  return useQuery({
    queryKey: ["workshops", location, userCoordinates?.latitude, userCoordinates?.longitude],
    queryFn: () => fetchWorkshops(location, userCoordinates),
    enabled: location !== "내 근처" || !!userCoordinates,
    staleTime: 5 * 60 * 1000,
  });
}
