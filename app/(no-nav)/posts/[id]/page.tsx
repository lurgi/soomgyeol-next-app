"use client";
import Divider from "@/app/components/Divider";
import MobileLayout from "@/app/components/MobileLayout";
import PostDetail from "@/app/components/PostDetail";
import Comment from "@/app/components/Comment";

import { useState } from "react";
import { Edit3, RotateCw, Trash2 } from "lucide-react";
import CommentInput from "@/app/components/CommentInput";

export default function PostDetailPage() {
  return (
    <MobileLayout>
      <MobileLayout.Header type="detail" title="" />
      <MobileLayout.Main>
        <PostContent />
      </MobileLayout.Main>
    </MobileLayout>
  );
}

const sampleAuthor = {
  name: "요기한별",
  avatar: "/logo.svg",
};

const sampleDate = new Date(2025, 1, 7, 7, 0);
const sampleEndDate = new Date(2025, 2, 12, 7, 0);

function PostContent() {
  const [likeCount, setLikeCount] = useState(42);

  const handleLikeClick = () => {
    setLikeCount((prev) => (prev === 42 ? 43 : 42));
  };
  return (
    <div className="flex flex-col gap-5 pt-12">
      <PostDetail>
        <PostDetail.Content
          title="주말 오전 하타요가 클래스 대타 강사님 구합니다"
          description="하타요가 수업 대타 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가능하신 분 우대."
          imageUrl="/yoga2.png"
          author={sampleAuthor}
          dropdownItems={[
            { label: "수정하기", Icon: Edit3, onClick: () => console.log("수정") },
            { label: "새로 작성하기", Icon: RotateCw, onClick: () => console.log("새로작성") },
            { label: "삭제하기", Icon: Trash2, onClick: () => console.log("삭제") },
          ]}
        />
        <PostDetail.Metadata
          type="range"
          startDate={sampleDate}
          endDate={sampleEndDate}
          daysOfWeek={["월", "수"]}
          commentCount={12}
          likeCount={likeCount}
          viewCount={249}
          location="서울 마포구 연남동 요가홀"
          onLikeClick={handleLikeClick}
        />
      </PostDetail>

      <Divider />

      <div className="px-6">
        <Comment>
          <Comment.Main
            author={{ name: "러기", avatar: "/logo.svg" }}
            content="요가 시작한 지 얼마 안 됐는데 이런 글 읽으니 힘이 나요 :) 고맙습니다."
            createdAt={new Date(2025, 1, 7, 7, 0)}
            likeCount={59}
            isLiked={false}
            toggleLike={() => console.log("좋아요 토글")}
          />
          <Comment.Sub
            author={{ name: "러기", avatar: "/logo.svg" }}
            content="오늘 날씨 너무 좋네요"
            createdAt={new Date(2025, 1, 7, 7, 0)}
            likeCount={5}
            isLiked={true}
            toggleLike={() => console.log("좋아요 토글")}
          />
        </Comment>
      </div>

      <MobileLayout.BottomOverlay>
        <div className="py-2 px-4 bg-slate-100">
          <CommentInput />
        </div>
      </MobileLayout.BottomOverlay>
    </div>
  );
}
