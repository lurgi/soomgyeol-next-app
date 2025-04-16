import type { Meta, StoryObj } from "@storybook/react";
import PostDetail from "./index";
import { useState } from "react";
import { Edit3, RotateCw, Trash2 } from "lucide-react";

const meta: Meta<typeof PostDetail> = {
  title: "Components/PostDetail",
  component: PostDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PostDetail>;

// 정각 시간 예시
const sampleDate = new Date(2025, 1, 7, 7, 0); // 2025-02-07 07:00
const sampleEndDate = new Date(2025, 2, 12, 7, 0); // 2025-03-12 07:00

// 정각이 아닌 시간 예시
const sampleDateWithMinutes = new Date(2025, 1, 7, 7, 30); // 2025-02-07 07:30
const sampleEndDateWithMinutes = new Date(2025, 2, 12, 18, 45); // 2025-03-12 18:45

// 샘플 드롭다운 아이템
const sampleDropdownItems = [
  { label: "수정하기", Icon: Edit3, onClick: () => console.log("수정") },
  { label: "새로 작성하기", Icon: RotateCw, onClick: () => console.log("새로작성") },
  { label: "삭제하기", Icon: Trash2, onClick: () => console.log("삭제") },
];

// 기본 PostDetail 스토리
export const Default: Story = {
  render: function DefaultStory() {
    const [likeCount, setLikeCount] = useState(59);

    const handleLikeClick = () => {
      setLikeCount((prev) => prev + 1);
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Content
            title="주말 오전 하타요가 클래스 대타 강사님 구합니다"
            description="하타요가 수업 대타 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가능하신 분 우대."
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
      </div>
    );
  },
};

// 기간 이벤트 스토리 (분 표시 포함)
export const DateRangeWithMinutes: Story = {
  render: function DateRangeWithMinutesStory() {
    const [likeCount, setLikeCount] = useState(42);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 42 ? 43 : 42));
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Content
            title="저녁 요가 정규 클래스 모집"
            description="직장인을 위한 저녁 요가 클래스입니다. 6주 과정으로 진행됩니다."
          />
          <PostDetail.Metadata
            type="range"
            startDate={sampleDateWithMinutes}
            endDate={sampleEndDateWithMinutes}
            daysOfWeek={["화", "목", "금"]}
            commentCount={8}
            likeCount={likeCount}
            viewCount={176}
            location="서울 강남구 역삼동 요가스튜디오"
            isLiked={false}
            onLikeClick={handleLikeClick}
          />
        </PostDetail>
      </div>
    );
  },
};

// 단일 날짜 이벤트 스토리 (정각 시간)
export const SingleDateEvent: Story = {
  render: function SingleDateEventStory() {
    const [likeCount, setLikeCount] = useState(27);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 27 ? 28 : 27)); // 좋아요 토글 기능
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Content
            title="일일 명상 워크샵 참가자 모집"
            description="명상을 통한 마음 챙김과 스트레스 해소 방법을 배워봅니다."
          />
          <PostDetail.Metadata
            type="single"
            date={sampleDate}
            commentCount={5}
            likeCount={likeCount}
            viewCount={120}
            location="서울 강남구 삼성동 명상센터"
            isLiked={true}
            onLikeClick={handleLikeClick}
          />
        </PostDetail>
      </div>
    );
  },
};

// 단일 날짜 이벤트 스토리 (분 표시 포함)
export const SingleDateEventWithMinutes: Story = {
  render: function SingleDateEventWithMinutesStory() {
    const [likeCount, setLikeCount] = useState(15);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 15 ? 16 : 15));
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Metadata
            type="single"
            date={sampleDateWithMinutes}
            commentCount={3}
            likeCount={likeCount}
            viewCount={85}
            location="서울 마포구 연남동 요가스튜디오"
            isLiked={false}
            onLikeClick={handleLikeClick}
          />
        </PostDetail>
      </div>
    );
  },
};

// 날짜 정보 없는 일반 게시물 스토리
export const NoDatePost: Story = {
  render: function NoDatePostStory() {
    const [likeCount, setLikeCount] = useState(145);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 145 ? 146 : 145)); // 좋아요 토글 기능
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Content
            title="요가 초보자를 위한 팁"
            description="요가를 처음 시작하는 분들을 위한 유용한 조언들"
          />
          <PostDetail.Metadata
            type="none"
            commentCount={32}
            likeCount={likeCount}
            viewCount={789}
            isLiked={true}
            onLikeClick={handleLikeClick}
          />
        </PostDetail>
      </div>
    );
  },
};

// 콘텐츠만 있는 스토리 (메타데이터 없음)
export const ContentOnly: Story = {
  render: function ContentOnlyStory() {
    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Content
            title="요가 초보자를 위한 팁"
            description="요가를 처음 시작하는 분들을 위한 유용한 조언들"
          />
        </PostDetail>
      </div>
    );
  },
};

// 메타데이터만 있는 스토리 (콘텐츠 없음)
export const MetadataOnly: Story = {
  render: function MetadataOnlyStory() {
    const [likeCount, setLikeCount] = useState(59);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 59 ? 60 : 59));
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.Metadata
            type="range"
            startDate={sampleDate}
            endDate={sampleEndDate}
            daysOfWeek={["월", "수", "금"]}
            commentCount={12}
            likeCount={likeCount}
            viewCount={249}
            location="서울 마포구 연남동 요가홀"
            onLikeClick={handleLikeClick}
          />
        </PostDetail>
      </div>
    );
  },
};

// 작성자 정보 없는 스토리
export const NoAuthor: Story = {
  render: function NoAuthorStory() {
    const [likeCount, setLikeCount] = useState(59);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 59 ? 60 : 59));
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.HeaderRow
            author={{
              name: "요가마스터",
            }}
            dropdownItems={sampleDropdownItems}
          />
          <PostDetail.Image imageUrl="/yoga2.png" title="주말 오전 하타요가 클래스 대타 강사님 구합니다" />
          <PostDetail.Content
            title="주말 오전 하타요가 클래스 대타 강사님 구합니다"
            description="하타요가 수업 대타 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가능하신 분 우대."
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
      </div>
    );
  },
};

// 아바타 없는 작성자 스토리
export const AuthorWithoutAvatar: Story = {
  render: function AuthorWithoutAvatarStory() {
    const [likeCount, setLikeCount] = useState(59);

    const handleLikeClick = () => {
      setLikeCount((prev) => (prev === 59 ? 60 : 59));
    };

    return (
      <div className="max-w-md">
        <PostDetail>
          <PostDetail.HeaderRow
            author={{
              name: "요가마스터",
            }}
            dropdownItems={sampleDropdownItems}
          />
          <PostDetail.Image imageUrl="/yoga2.png" title="주말 오전 하타요가 클래스 대타 강사님 구합니다" />
          <PostDetail.Content
            title="주말 오전 하타요가 클래스 대타 강사님 구합니다"
            description="하타요가 수업 대타 강사님을 찾고 있습니다. 1.5시간 수업, 소도구 사용가능하신 분 우대."
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
      </div>
    );
  },
};
