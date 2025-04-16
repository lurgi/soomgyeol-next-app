"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Workshop, WorkshopPaginatedResponse } from "@/types/workshop";

async function fetchTopWorkshops(): Promise<Workshop[]> {
  // 서버 사이드 렌더링 중에는 MSW가 처리하도록 모의 데이터 반환
  if (typeof window === "undefined") {
    // 빌드 과정에서는 빈 배열 반환
    return [];
  }

  const baseUrl = window.location.origin;
  const url = `${baseUrl}/api/workshops`;
  const params = new URLSearchParams();
  params.append("limit", "10");

  try {
    const response = await fetch(`${url}?${params}`);

    if (!response.ok) {
      throw new Error("워크샵 데이터를 불러오는데 실패했습니다.");
    }

    const data: WorkshopPaginatedResponse = await response.json();
    return data.workshops;
  } catch (error) {
    console.error("워크샵 데이터 로딩 오류:", error);
    return [];
  }
}

export function useTopWorkshops() {
  return useSuspenseQuery({
    queryKey: ["workshops", "top"],
    queryFn: fetchTopWorkshops,
    staleTime: 3000,
  });
}
