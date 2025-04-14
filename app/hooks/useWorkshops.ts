import { useState, useEffect, useCallback } from "react";
import { Workshop, Coordinates, WorkshopPaginatedResponse } from "@/types/workshop";

interface UseWorkshopsProps {
  initialWorkshops?: Workshop[];
  coordinates?: Coordinates;
  radius?: number;
  limit?: number;
}

export function useWorkshops({ initialWorkshops = [], coordinates, radius, limit = 10 }: UseWorkshopsProps = {}) {
  const [workshops, setWorkshops] = useState<Workshop[]>(initialWorkshops);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const fetchWorkshops = useCallback(
    async (reset = false) => {
      if (loading || (!hasMore && !reset)) return;

      try {
        setLoading(true);
        setError(null);

        let url: string;

        if (coordinates) {
          url = `/api/workshops/nearby?lat=${coordinates.latitude}&lng=${coordinates.longitude}&radius=${
            radius || 5000
          }&limit=${limit}`;
        } else {
          url = `/api/workshops?limit=${limit}`;
        }

        if (nextCursor && !reset) {
          url += `&cursor=${nextCursor}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("워크샵 데이터를 불러오는데 실패했습니다.");
        }

        const data: WorkshopPaginatedResponse = await response.json();

        setWorkshops((prev) => (reset ? data.workshops : [...prev, ...data.workshops]));
        setNextCursor(data.nextCursor);
        setHasMore(data.hasMore);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    },
    [coordinates, hasMore, limit, loading, nextCursor, radius]
  );

  useEffect(() => {
    setWorkshops([]);
    setNextCursor(null);
    setHasMore(true);
    fetchWorkshops(true);
  }, [coordinates, radius, fetchWorkshops]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchWorkshops();
    }
  }, [fetchWorkshops, hasMore, loading]);

  const refresh = useCallback(() => {
    setWorkshops([]);
    setNextCursor(null);
    setHasMore(true);
    fetchWorkshops(true);
  }, [fetchWorkshops]);

  return {
    workshops,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
  };
}
