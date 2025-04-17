import { useSuspenseQuery } from "@tanstack/react-query";
import { Workshop } from "@/types/workshop";

const fetchWorkshop = async (id: string) => {
  const response = await fetch(`/api/workshop/detail/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "워크샵 상세 정보를 불러오는 중 오류가 발생했습니다.");
  }

  return response.json();
};

export default function useWorkshopDetail(id: string) {
  return useSuspenseQuery<Workshop>({
    queryKey: ["workshop", "detail", id],
    queryFn: () => fetchWorkshop(id),
    staleTime: 10 * 60 * 1000,
  });
}
