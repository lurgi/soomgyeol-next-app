import type { Meta, StoryObj } from "@storybook/react";
import PostLightPreview from "./index";

const meta: Meta<typeof PostLightPreview> = {
  title: "Components/PostLightPreview",
  component: PostLightPreview,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof PostLightPreview>;

const now = new Date();
const oneHourAgo = new Date(now.getTime() - 1 * 60 * 60 * 1000);
const sixHoursAgo = new Date(now.getTime() - 6 * 60 * 60 * 1000);
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

const renderPostPreview = ({
  title,
  subtitle,
  timestamp,
  commentCount,
  likeCount,
  viewCount,
  imageSrc,
}: {
  title: string;
  subtitle?: string;
  timestamp: Date;
  commentCount?: number;
  likeCount?: number;
  viewCount: number;
  imageSrc?: string;
}) => (
  <PostLightPreview>
    <PostLightPreview.Content title={title} subtitle={subtitle} imageSrc={imageSrc} imageAlt={title} />
    <PostLightPreview.Metadata
      timestamp={timestamp}
      commentCount={commentCount}
      likeCount={likeCount}
      viewCount={viewCount}
    />
  </PostLightPreview>
);

export const Default: Story = {
  render: () =>
    renderPostPreview({
      title: "요가 시작한 지 한 달, 작은 변화들이 느껴져요",
      subtitle:
        "요가를 시작한 지 딱 한 달 되었어요. 처음엔 몸이 너무 뻣뻣해서 스트레칭도 힘들었는데, 지금은 없어서 허리를 펴는...",
      timestamp: sixHoursAgo,
      commentCount: 12,
      likeCount: 59,
      viewCount: 234,
    }),
};

export const WithImage: Story = {
  render: () =>
    renderPostPreview({
      title: "요가매트 뭐 쓰시나요? 추천 좀 부탁드...",
      subtitle: "지금까지는 집에서 그냥 미끄럼방지 매트 깔고 했는데, 슬슬 진짜 요가매트를 하나 사보려...",
      timestamp: oneDayAgo,
      commentCount: 12,
      likeCount: 59,
      viewCount: 234,
      imageSrc: "/yoga1.png",
    }),
};

export const NoComments: Story = {
  render: () =>
    renderPostPreview({
      title: "요가 초보자 질문이요",
      subtitle: "요가를 시작한 지 이제 2주 되었는데, 호흡법이 어려워요. 어떻게 하면 좋을까요?",
      timestamp: oneDayAgo,
      commentCount: 0,
      likeCount: 45,
      viewCount: 189,
    }),
};

export const NoLikes: Story = {
  render: () =>
    renderPostPreview({
      title: "요가 수련 일지 #3",
      subtitle: "오늘은 하타요가 기본 동작을 연습했습니다. 어깨가 많이 뻐근하네요.",
      timestamp: threeDaysAgo,
      commentCount: 8,
      likeCount: 0,
      viewCount: 120,
    }),
};

export const OnlyViews: Story = {
  render: () =>
    renderPostPreview({
      title: "첫 요가 클래스 후기",
      subtitle: "오늘 처음으로 요가 스튜디오에 가서 수업을 들었어요. 생각보다 어렵네요!",
      timestamp: oneWeekAgo,
      commentCount: 0,
      likeCount: 0,
      viewCount: 78,
    }),
};

export const TimeVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <div>
        <p className="text-sm mb-1">방금 전:</p>
        {renderPostPreview({
          title: "방금 올린 요가 포스트",
          timestamp: now,
          viewCount: 10,
        })}
      </div>
      <div>
        <p className="text-sm mb-1">1시간 전:</p>
        {renderPostPreview({
          title: "1시간 전에 올린 요가 포스트",
          timestamp: oneHourAgo,
          viewCount: 20,
        })}
      </div>
      <div>
        <p className="text-sm mb-1">6시간 전:</p>
        {renderPostPreview({
          title: "6시간 전에 올린 요가 포스트",
          timestamp: sixHoursAgo,
          viewCount: 30,
          commentCount: 5,
        })}
      </div>
      <div>
        <p className="text-sm mb-1">1일 전:</p>
        {renderPostPreview({
          title: "1일 전에 올린 요가 포스트",
          timestamp: oneDayAgo,
          viewCount: 40,
          commentCount: 8,
          likeCount: 15,
        })}
      </div>
      <div>
        <p className="text-sm mb-1">3일 전:</p>
        {renderPostPreview({
          title: "3일 전에 올린 요가 포스트",
          timestamp: threeDaysAgo,
          viewCount: 50,
          imageSrc: "/yoga2.png",
        })}
      </div>
      <div>
        <p className="text-sm mb-1">1주 전:</p>
        {renderPostPreview({
          title: "1주 전에 올린 요가 포스트",
          timestamp: oneWeekAgo,
          viewCount: 60,
          commentCount: 12,
          likeCount: 30,
        })}
      </div>
      <div>
        <p className="text-sm mb-1">1달 전:</p>
        {renderPostPreview({
          title: "1달 전에 올린 요가 포스트",
          timestamp: oneMonthAgo,
          viewCount: 70,
          imageSrc: "/yoga1.png",
        })}
      </div>
      <div>
        <p className="text-sm mb-1">1년 전:</p>
        {renderPostPreview({
          title: "1년 전에 올린 요가 포스트",
          timestamp: oneYearAgo,
          viewCount: 80,
          commentCount: 25,
          likeCount: 120,
        })}
      </div>
    </div>
  ),
};
