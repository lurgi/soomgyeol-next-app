import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CarouselSkeleton from ".";

const meta: Meta<typeof CarouselSkeleton> = {
  title: "Fallback/CarouselSkeleton",
  component: CarouselSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // 또는 "fullscreen", "padded" 등 원하는 대로
  },
};

export default meta;
type Story = StoryObj<typeof CarouselSkeleton>;

export const Default: Story = {
  render: () => <CarouselSkeleton />,
};
