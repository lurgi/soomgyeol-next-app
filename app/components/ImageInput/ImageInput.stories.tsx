import type { Meta, StoryObj } from "@storybook/react";
import ImageInput from ".";

const meta: Meta<typeof ImageInput> = {
  title: "Components/ImageInput",
  component: ImageInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["circle", "square"],
    },
    width: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Circle: Story = {
  args: {
    width: 120,
    type: "circle",
  },
};

export const Square: Story = {
  args: {
    width: 120,
    type: "square",
  },
};
