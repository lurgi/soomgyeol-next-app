"use client";

import { useQuery } from "@tanstack/react-query";
import { Workshop, WorkshopPaginatedResponse } from "@/types/workshop";

async function fetchTopWorkshops(): Promise<Workshop[]> {
  const url = "/api/workshops";
  const params = new URLSearchParams();
  params.append("limit", "10");

  const response = await fetch(`${url}?${params}`);

  if (!response.ok) {
    throw new Error("워크샵 데이터를 불러오는데 실패했습니다.");
  }

  const data: WorkshopPaginatedResponse = await response.json();
  return data.workshops;
}

export function useTopWorkshops() {
  return useQuery({
    queryKey: ["workshops", "top"],
    queryFn: fetchTopWorkshops,
    staleTime: 5 * 60 * 1000, // 5분 동안 데이터 캐싱
  });
}
