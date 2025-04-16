"use client";

import PostDetail from "@/app/components/PostDetail";
// import { Edit3, RotateCw, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import useWorkshopDetail from "@/app/hooks/useWorkshopDetail";

export default function PostDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: workshopDetail } = useWorkshopDetail(id);

  return (
    <div className="flex flex-col gap-5 sm:mt-8">
      <PostDetail>
        <PostDetail.Image imageUrl={workshopDetail?.image_url || "/yoga1.png"} title={workshopDetail?.title || ""} />
        <div className="flex justify-between">
          <PostDetail.HeaderRow author={{ name: "숨결", avatar: "/logo.svg" }} />
          <PostDetail.Metadata
            type="none"
            viewCount={workshopDetail?.view}
            location={`${workshopDetail?.locationtext} ${workshopDetail?.place}`}
            // onLikeClick={handleLikeClick}
          />
        </div>
        <PostDetail.Content
          title={workshopDetail?.title || ""}
          description={workshopDetail?.description || ""}

          // dropdownItems={[
          //   { label: "수정하기", Icon: Edit3, onClick: () => console.log("수정") },
          //   { label: "새로 작성하기", Icon: RotateCw, onClick: () => console.log("새로작성") },
          //   { label: "삭제하기", Icon: Trash2, onClick: () => console.log("삭제") },
          // ]}
        />
      </PostDetail>

      {/* <Divider />

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
      </MobileLayout.BottomOverlay> */}
    </div>
  );
}
