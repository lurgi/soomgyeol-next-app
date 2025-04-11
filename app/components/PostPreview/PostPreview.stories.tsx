import type { Meta, StoryObj } from "@storybook/react";
import PostPreview from "./index";

// Sample dates for our stories
const singleDate = new Date(2025, 1, 7, 7, 30); // February 7, 2025, 7:30 AM
const rangeStartDate = new Date(2025, 1, 7); // February 7, 2025
const rangeEndDate = new Date(2025, 2, 12); // March 12, 2025

const meta: Meta<typeof PostPreview> = {
  title: "Components/PostPreview",
  component: PostPreview,
  parameters: {
    // Using the global layout setting
  },
  decorators: [
    (Story) => (
      <div className="p-4 max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PostPreview>;

// Example with specific date and time
export const SingleDateExample: Story = {
  render: () => (
    <PostPreview id="1">
      <PostPreview.Content
        title="주말 오전 하타요가 클래스"
        subtitle="하타요가 수업 대타 강사님을 찾고 있습니다."
        imageUrl="/yoga1.png"
      />
      <PostPreview.Metadata
        type="single"
        location="서울 마포구 연남동 요가숲"
        date={singleDate}
        commentCount={12}
        likeCount={59}
        viewCount={249}
      />
    </PostPreview>
  )
};

// Example with date range and weekdays
export const DateRangeExample: Story = {
  render: () => (
    <PostPreview id="2">
      <PostPreview.Content
        title="주말 오전 하타요가 클래스"
        subtitle="1.5시간 수업, 소도구 사용 가능하신 분 우대."
        imageUrl="/yoga2.png"
      />
      <PostPreview.Metadata
        type="range"
        location="서울 마포구 연남동 요가숲"
        startDate={rangeStartDate}
        endDate={rangeEndDate}
        daysOfWeek={['월', '수']}
        commentCount={12}
        likeCount={59}
        viewCount={249}
      />
    </PostPreview>
  )
};

// Example with no comments or likes
export const NoCommentsOrLikes: Story = {
  render: () => (
    <PostPreview id="3">
      <PostPreview.Content
        title="주말 오전 하타요가 클래스"
        subtitle="하타요가 수업 대타 강사님을 찾고 있습니다."
        imageUrl="/yoga1.png"
      />
      <PostPreview.Metadata
        type="single"
        location="서울 마포구 연남동 요가숲"
        date={singleDate}
        viewCount={249}
      />
    </PostPreview>
  )
};

// Example with both side by side
const PostPreviewGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PostPreview id="1">
        <PostPreview.Content
          title="주말 오전 하타요가 클래스"
          subtitle="하타요가 수업 대타 강사님을 찾고 있습니다."
          imageUrl="/yoga1.png"
        />
        <PostPreview.Metadata
          type="single"
          location="서울 마포구 연남동 요가숲"
          date={singleDate}
          commentCount={12}
          likeCount={59}
          viewCount={249}
        />
      </PostPreview>
      <PostPreview id="2">
        <PostPreview.Content
          title="주말 오전 하타요가 클래스"
          subtitle="1.5시간 수업, 소도구 사용 가능하신 분 우대."
          imageUrl="/yoga2.png"
        />
        <PostPreview.Metadata
          type="range"
          location="서울 마포구 연남동 요가숲"
          startDate={rangeStartDate}
          endDate={rangeEndDate}
          daysOfWeek={['월', '수']}
          commentCount={12}
          likeCount={59}
          viewCount={249}
        />
      </PostPreview>
    </div>
  );
};

export const ComparisonView: Story = {
  render: () => <PostPreviewGrid />,
};
