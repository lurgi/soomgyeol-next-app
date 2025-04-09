"use client";

import { Fragment, useState } from "react";
import Tabs from "@/app/components/Tabs";
import MobileLayout from "@/app/components/MobileLayout";
import LocationTags from "@/app/components/LocationTags";
import PostPreview from "@/app/components/PostPreview";
import Divider from "@/app/components/Divider";
import { Body } from "@/app/components/font";
import { useSearchParams } from "next/navigation";
import PostLightPreview from "@/app/components/PostLightPreview";

// Sample data for posts
const samplePosts = [
  {
    id: "1",
    title: "하타요가 오전 클래스 (초보자 환영)",
    subtitle: "하루를 차분히 시작하고 싶은 분들을 위한 하타요가 클래스입니다. 호흡과 스트레칭 중심으로 진행합니다.",
    location: "서울 마포구 연남동 요가홀",
    date: new Date(2025, 1, 7), // 2025-02-07
    endDate: new Date(2025, 3, 7), // 2025-04-07
    daysOfWeek: ["매주 수요일"],
    commentCount: 12,
    likeCount: 59,
    viewCount: 249,
    imageUrl: "/yoga1.png",
  },
  {
    id: "2",
    title: "주말 오전 하타요가 클래스 대모집",
    subtitle: "하타요가 수업 대대 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가 능하신 분 우대.",
    location: "서울 마포구 연남동 요가홀",
    date: new Date(2025, 1, 7), // 2025-02-07
    time: "오전 7시 30분",
    commentCount: 12,
    likeCount: 59,
    viewCount: 249,
    imageUrl: "/yoga2.png",
  },
  {
    id: "3",
    title: "주말 오전 하타요가 클래스 대모집",
    subtitle: "하타요가 수업 대대 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가 능하신 분 우대.",
    location: "서울 마포구 연남동 요가홀",
    date: new Date(2025, 1, 7), // 2025-02-07
    time: "오전 7시 30분",
    commentCount: 12,
    likeCount: 59,
    viewCount: 249,
    imageUrl: "/yoga2.png",
  },
  {
    id: "4",
    title: "주말 오전 하타요가 클래스 대모집",
    subtitle: "하타요가 수업 대대 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가 능하신 분 우대.",
    location: "서울 마포구 연남동 요가홀",
    date: new Date(2025, 1, 7), // 2025-02-07
    time: "오전 7시 30분",
    commentCount: 12,
    likeCount: 59,
    viewCount: 249,
    imageUrl: "/yoga2.png",
  },
  {
    id: "5",
    title: "주말 오전 하타요가 클래스 대모집",
    subtitle: "하타요가 수업 대대 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가 능하신 분 우대.",
    location: "서울 마포구 연남동 요가홀",
    date: new Date(2025, 1, 7), // 2025-02-07
    time: "오전 7시 30분",
    commentCount: 12,
    likeCount: 59,
    viewCount: 249,
    imageUrl: "/yoga2.png",
  },
];

const locations = ["전체", "내 근처", "강남", "제주도", "서울", "부산", "인천", "대구", "광주", "대전", "울산"];

export default function Posts() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "workshop" | "free" | null;
  const SEARCH_PARAM_TYPE = {
    workshop: "워크샵/클래스",
    free: "자유 게시판",
  };

  const [selectedLocation, setSelectedLocation] = useState<string>("전체");

  return (
    <div className="container mx-auto pt-25.5">
      <Tabs defaultTab={type ? SEARCH_PARAM_TYPE[type] : "워크샵/클래스"}>
        <MobileLayout.SubHeader>
          <div className="flex w-full px-6 border-b-1 border-slate-300">
            <Tabs.Tab id="워크샵/클래스" className="flex-1 text-center">
              <Body.B1>워크샵/클래스</Body.B1>
            </Tabs.Tab>
            <Tabs.Tab id="구인 게시판" className="flex-1 text-center">
              <Body.B1>구인 게시판</Body.B1>
            </Tabs.Tab>
            <Tabs.Tab id="자유 게시판" className="flex-1 text-center">
              <Body.B1>자유 게시판</Body.B1>
            </Tabs.Tab>
          </div>
        </MobileLayout.SubHeader>

        <Tabs.Content tabId="워크샵/클래스" className="flex flex-col gap-4">
          <LocationTags tags={locations} defaultSelected="전체" onChange={setSelectedLocation} />

          <div className="space-y-2.5">
            {samplePosts
              .filter((post) => selectedLocation === "전체" || post.location.includes(selectedLocation))
              .map((post, index) => (
                <Fragment key={index}>
                  {index !== 0 && <Divider />}
                  <div className="px-6">
                    <PostPreview key={post.id} id={post.id}>
                      <PostPreview.Content
                        title={post.title}
                        subtitle={post.subtitle}
                        imageUrl={post.imageUrl}
                        imageAlt={post.title}
                      />
                      {post.endDate ? (
                        <PostPreview.Metadata
                          type="range"
                          startDate={post.date}
                          endDate={post.endDate}
                          daysOfWeek={post.daysOfWeek}
                          commentCount={post.commentCount}
                          likeCount={post.likeCount}
                          viewCount={post.viewCount}
                          location={post.location}
                        />
                      ) : (
                        <PostPreview.Metadata
                          type="single"
                          date={post.date}
                          commentCount={post.commentCount}
                          likeCount={post.likeCount}
                          viewCount={post.viewCount}
                          location={post.location}
                        />
                      )}
                    </PostPreview>
                  </div>
                </Fragment>
              ))}
          </div>
        </Tabs.Content>

        <Tabs.Content tabId="구인 게시판" className="flex flex-col gap-4">
          <LocationTags tags={locations} defaultSelected="전체" onChange={setSelectedLocation} />
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
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
