import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  argTypes: {
    activeItem: {
      control: { type: "select" },
      options: ["home", "document", "edit", "profile"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Default Navbar with Home active
export const Home: Story = {
  args: {
    activeItem: "home",
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 bg-background p-4">
          <p className="mb-4">페이지 콘텐츠 영역</p>
          <p className="mb-4">하단에 네비게이션 바가 고정되어 있습니다.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Document tab active
export const Document: Story = {
  args: {
    activeItem: "posts",
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 bg-background p-4">
          <p className="mb-4">문서 페이지 콘텐츠 영역</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Edit tab active
export const Edit: Story = {
  args: {
    activeItem: "edit",
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 bg-background p-4">
          <p className="mb-4">편집 페이지 콘텐츠 영역</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Profile tab active
export const Profile: Story = {
  args: {
    activeItem: "profile",
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex flex-col">
        <div className="flex-1 bg-background p-4">
          <p className="mb-4">프로필 페이지 콘텐츠 영역</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
