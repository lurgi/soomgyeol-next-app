import type { Meta, StoryObj } from "@storybook/react";
import Comment from "./index";

const meta: Meta<typeof Comment> = {
  title: "Components/Comment",
  component: Comment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Comment>;

// 더미 데이터
const dummyDate = new Date("2025-04-07T06:13:17");
const oneHourAgo = new Date(dummyDate.getTime() - 60 * 60 * 1000);
const sixHoursAgo = new Date(dummyDate.getTime() - 6 * 60 * 60 * 1000);

// 코멘트가 없는 상태
export const NoComments: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <div className="text-center text-slate-500 py-8">댓글이 없습니다.</div>
    </div>
  ),
};

// 메인 코멘트만 있는 상태
export const SingleComment: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <Comment>
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="요가 시작한 지 얼마 안 됐는데 이런 글 읽으니 힘이 나요 :) 고맙습니다."
          createdAt={oneHourAgo}
          likeCount={59}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
      </Comment>
    </div>
  ),
};

// 메인 코멘트와 서브 코멘트가 있는 상태
export const WithSubComments: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <Comment>
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="요가 시작한 지 얼마 안 됐는데 이런 글 읽으니 힘이 나요 :) 고맙습니다."
          createdAt={sixHoursAgo}
          likeCount={59}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Sub
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="오늘 날씨 너무 좋네요"
          createdAt={oneHourAgo}
          likeCount={5}
          isLiked={true}
          toggleLike={() => console.log("좋아요 토글")}
        />
      </Comment>
    </div>
  ),
};

// 여러 개의 메인 코멘트와 서브 코멘트가 있는 상태
export const MultipleComments: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <Comment>
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="요가 시작한 지 얼마 안 됐는데 이런 글 읽으니 힘이 나요 :) 고맙습니다."
          createdAt={sixHoursAgo}
          likeCount={59}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Sub
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="오늘 날씨 너무 좋네요"
          createdAt={oneHourAgo}
          likeCount={5}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="이 워크샵 너무 좋아 보여요! 혹시 매트는 따로 챙겨가야 하나요?"
          createdAt={sixHoursAgo}
          likeCount={12}
          isLiked={true}
          toggleLike={() => console.log("좋아요 토글")}
        />
      </Comment>
    </div>
  ),
};

// 좋아요 상태 표시 예시
export const LikedComment: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <Comment>
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="좋아요가 활성화된 코멘트입니다."
          createdAt={oneHourAgo}
          likeCount={42}
          isLiked={true}
          toggleLike={() => console.log("좋아요 토글")}
        />
      </Comment>
    </div>
  ),
};

// 메인 코멘트와 여러 개의 서브 코멘트가 있는 상태
export const MainWithMultipleSubComments: Story = {
  render: () => (
    <div className="w-full max-w-md p-4 bg-white rounded-lg">
      <Comment>
        <Comment.Main
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="요가 클래스에 대해 질문이 있어요. 초보자도 참여할 수 있나요?"
          createdAt={sixHoursAgo}
          likeCount={24}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Sub
          author={{ name: "소옴결", avatar: "/logo.svg" }}
          content="네! 초보자도 충분히 따라할 수 있는 난이도로 진행됩니다."
          createdAt={new Date(dummyDate.getTime() - 5 * 60 * 60 * 1000)}
          likeCount={8}
          isLiked={true}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Sub
          author={{ name: "요가마스터", avatar: "/logo.svg" }}
          content="저도 처음에는 초보였는데 지금은 매일 하고 있어요. 정말 좋습니다!"
          createdAt={new Date(dummyDate.getTime() - 4 * 60 * 60 * 1000)}
          likeCount={12}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
        <Comment.Sub
          author={{ name: "러기", avatar: "/logo.svg" }}
          content="감사합니다! 용기를 내서 신청해볼게요."
          createdAt={new Date(dummyDate.getTime() - 3 * 60 * 60 * 1000)}
          likeCount={4}
          isLiked={false}
          toggleLike={() => console.log("좋아요 토글")}
        />
      </Comment>
    </div>
  ),
};
