import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 16, max: 96, step: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// 기본 아바타 (이미지 있음)
export const WithImage: Story = {
  args: {
    name: "홍길동",
    avatar: "/logo.svg",
    size: 48,
  },
};

// 이미지 없는 아바타 (이니셜 표시)
export const WithInitial: Story = {
  args: {
    name: "홍길동",
    size: 48,
  },
};

// 다양한 크기의 아바타
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar name="홍길동" avatar="/logo.svg" size={24} />
        <span>24px (기본 크기)</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="홍길동" avatar="/logo.svg" size={32} />
        <span>32px</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="홍길동" avatar="/logo.svg" size={48} />
        <span>48px</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="홍길동" avatar="/logo.svg" size={64} />
        <span>64px</span>
      </div>
    </div>
  ),
};

// 다양한 이름의 이니셜 아바타
export const DifferentInitials: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar name="홍길동" size={40} />
        <span>홍길동 (홍)</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="김철수" size={40} />
        <span>김철수 (김)</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="이영희" size={40} />
        <span>이영희 (이)</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="John Doe" size={40} />
        <span>John Doe (J)</span>
      </div>
    </div>
  ),
};
