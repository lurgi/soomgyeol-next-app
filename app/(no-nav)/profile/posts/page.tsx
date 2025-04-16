"use client";

import { Body } from "@/app/components/font";
import Loader from "@/app/components/Loader";
import MobileLayout from "@/app/components/MobileLayout";
import PostLightPreview from "@/app/components/PostLightPreview";
import Tabs from "@/app/components/Tabs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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

export default function MyPostsPage() {
  return (
    <MobileLayout>
      <MobileLayout.Header title="" type="detail" hasIcons={true} />
      <MobileLayout.Main>
        <Suspense fallback={<Loader />}>
          <MyPosts />
        </Suspense>
      </MobileLayout.Main>
    </MobileLayout>
  );
}

type POST_TYPE = "myPosts" | "likedPosts" | "recentPosts";
type POST_TYPE_VIEW = "내가 쓴 게시글" | "좋아한 게시글" | "최근 본 게시글";

function MyPosts() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as POST_TYPE;
  const SEARCH_PARAM_TYPE: Record<POST_TYPE, POST_TYPE_VIEW> = {
    myPosts: "내가 쓴 게시글",
    likedPosts: "좋아한 게시글",
    recentPosts: "최근 본 게시글",
  };

  return (
    <div className="container mx-auto pt-22">
      <Tabs defaultTab={type ? SEARCH_PARAM_TYPE[type] : "내가 쓴 게시글"}>
        <MobileLayout.SubHeader>
          <div className="flex w-full px-4 border-b-1 border-slate-300 ">
            <Tabs.Tab id="내가 쓴 게시글" className="flex-1 text-center">
              <Body.B2>내가 쓴 게시글</Body.B2>
            </Tabs.Tab>
            <Tabs.Tab id="좋아한 게시글" className="flex-1 text-center">
              <Body.B2>좋아한 게시글</Body.B2>
            </Tabs.Tab>
            <Tabs.Tab id="최근 본 게시글" className="flex-1 text-center">
              <Body.B2>최근 본 게시글</Body.B2>
            </Tabs.Tab>
          </div>
        </MobileLayout.SubHeader>

        <Tabs.Content tabId="내가 쓴 게시글">
          <div className="flex flex-col">
            {samplePosts.map((post) => (
              <Link href={`/posts/${post.id}`} className="block px-6 active:bg-slate-100 py-4" key={post.id}>
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
              </Link>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content tabId="좋아한 게시글">
          <div className="flex flex-col gap-4"></div>
        </Tabs.Content>

        <Tabs.Content tabId="최근 본 게시글">
          <div className="flex flex-col gap-4"></div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
