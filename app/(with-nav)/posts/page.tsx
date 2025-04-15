"use client";

import { Fragment, useEffect, useState, Suspense } from "react";
import Tabs from "@/app/components/Tabs";
import MobileLayout from "@/app/components/MobileLayout";
import LocationTags from "@/app/components/LocationTags";
import { Body } from "@/app/components/font";
import { useSearchParams } from "next/navigation";
import useIsMobile from "@/app/hooks/useIsMobile";
import { useWorkshopsQuery, LocationType } from "@/app/hooks/useWorkshopsQuery";
import WorkshopsList from "@/app/components/WorkshopsList";
import WorkshopsLoadingSkeleton from "@/app/components/WorkshopsLoadingSkeleton";

const locations = ["전체", "내 근처", "수도권", "제주"];

export default function Posts() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "workshop" | "free" | null;
  const isMobile = useIsMobile();
  const SEARCH_PARAM_TYPE = {
    workshop: "워크샵/클래스",
    free: "자유 게시판",
  };

  const [selectedLocation, setSelectedLocation] = useState<LocationType>("전체");

  // 위치 변경 핸들러 - string을 LocationType으로 변환
  const handleLocationChange = (location: string) => {
    // LocationType에 해당하는 값만 허용
    if (location === "전체" || location === "내 근처" || location === "수도권" || location === "제주") {
      setSelectedLocation(location);
    }
  };
  const [userCoordinates, setUserCoordinates] = useState<GeolocationCoordinates>();

  // 사용자 위치 가져오기 (내 근처 선택 시)
  useEffect(() => {
    if (selectedLocation === "내 근처" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoordinates(position.coords);
        },
        (error) => {
          console.error("위치 정보를 가져오는데 실패했습니다:", error);
        }
      );
    }
  }, [selectedLocation]);

  const { data: workshops, error } = useWorkshopsQuery(selectedLocation, userCoordinates);

  // 에러 로깅
  useEffect(() => {
    if (error) {
      console.error("워크샵 데이터를 가져오는데 실패했습니다:", error);
    }
  }, [error]);

  return (
    <div className="container mx-auto pt-25.5 md:pt-0">
      <Tabs defaultTab={type ? SEARCH_PARAM_TYPE[type] : "워크샵/클래스"}>
        {isMobile ? (
          <MobileLayout.SubHeader>
            <div className="flex w-full px-6 border-b-1 border-slate-300">
              <Tabs.Tab id="워크샵/클래스" className="flex-1 text-center">
                <Body.B1>워크샵/클래스</Body.B1>
              </Tabs.Tab>
              {/* <Tabs.Tab id="구인 게시판" className="flex-1 text-center">
                <Body.B1>구인 게시판</Body.B1>
              </Tabs.Tab>
              <Tabs.Tab id="자유 게시판" className="flex-1 text-center">
                <Body.B1>자유 게시판</Body.B1>
              </Tabs.Tab> */}
            </div>
          </MobileLayout.SubHeader>
        ) : (
          <></>
          // <div className="flex w-full px-6 border-b-1 border-slate-300">
          //   <Tabs.Tab id="워크샵/클래스" className="flex-1 text-center">
          //     <Body.B1>워크샵/클래스</Body.B1>
          //   </Tabs.Tab>
          //   <Tabs.Tab id="구인 게시판" className="flex-1 text-center">
          //     <Body.B1>구인 게시판</Body.B1>
          //   </Tabs.Tab>
          //   <Tabs.Tab id="자유 게시판" className="flex-1 text-center">
          //     <Body.B1>자유 게시판</Body.B1>
          //   </Tabs.Tab>
          // </div>
        )}

        <Tabs.Content tabId="워크샵/클래스" className="flex flex-col gap-4">
          <LocationTags tags={locations} defaultSelected="전체" onChange={handleLocationChange} />

          <div className="space-y-2.5 md:mt-6">
            <Suspense fallback={<WorkshopsLoadingSkeleton />}>
              <WorkshopsList workshops={workshops} />
            </Suspense>
          </div>
        </Tabs.Content>

        {/* <Tabs.Content tabId="구인 게시판" className="flex flex-col gap-4">
          <LocationTags tags={locations} defaultSelected="전체" onChange={handleLocationChange} />
          <Divider />
          <div className="py-8 text-center px-6">
            <Body.B1>구인 게시판 내용이 여기에 표시됩니다.</Body.B1>
          </div>
        </Tabs.Content>

        <Tabs.Content tabId="자유 게시판" className="flex flex-col gap-4">
          <div className="space-y-2.5">
            {samplePosts.map((post) => (
              <div className="px-6" key={post.id}>
                <PostLightPreview key={post.id}>
                  <PostLightPreview.Content
                    title={post.title}
                    subtitle={post.subtitle}
                    imageSrc={post.imageUrl}
                    imageAlt={post.title}
                  />
                  {post.endDate ? (
                    <PostLightPreview.Metadata
                      timestamp={post.date}
                      commentCount={post.commentCount}
                      likeCount={post.likeCount}
                      viewCount={post.viewCount}
                    />
                  ) : (
                    <PostLightPreview.Metadata
                      timestamp={post.date}
                      commentCount={post.commentCount}
                      likeCount={post.likeCount}
                      viewCount={post.viewCount}
                    />
                  )}
                </PostLightPreview>
              </div>
            ))}
          </div>
        </Tabs.Content> */}
      </Tabs>
    </div>
  );
}
