import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["main", "detail", "back"],
    },
    title: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Main Header (Default)
export const Main: Story = {
  args: {
    type: "main",
    title: "숨결",
  },
};

// Detail Header
export const Detail: Story = {
  args: {
    type: "detail",
    title: "상세 페이지",
    hasIcons: false,
    activeItem: "posts",
  },
};

// Back Header
export const Back: Story = {
  args: {
    type: "detail",
    title: "뒤로가기",
    hasIcons: true,
    activeItem: "posts",
  },
};
