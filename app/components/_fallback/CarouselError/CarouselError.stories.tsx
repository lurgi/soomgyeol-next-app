import type { Meta, StoryObj } from "@storybook/react";
import CarouselError from ".";

const meta: Meta<typeof CarouselError> = {
  title: "Fallback/CarouselError",
  component: CarouselError,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // 또는 fullscreen, padded 등 필요에 따라 조정
  },
};

export default meta;
type Story = StoryObj<typeof CarouselError>;

export const Default: Story = {
  render: () => <CarouselError />,
};
