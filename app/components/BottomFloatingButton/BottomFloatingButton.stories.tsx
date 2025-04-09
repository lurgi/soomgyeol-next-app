import type { Meta, StoryObj } from "@storybook/react";
import BottomFloatingButton from ".";

const meta: Meta<typeof BottomFloatingButton> = {
  title: "Components/BottomFloatingButton",
  component: BottomFloatingButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BottomFloatingButton>;

export const Default: Story = {
  render: () => <BottomFloatingButton>확인</BottomFloatingButton>,
};

export const Disabled: Story = {
  args: {
    children: "확인",
    disabled: true,
  },
};
