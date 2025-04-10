import type { Meta, StoryObj } from "@storybook/react";
import FindPlace from ".";

const meta: Meta<typeof FindPlace> = {
  title: "Components/FindPlace",
  component: FindPlace,
};

export default meta;
type Story = StoryObj<typeof FindPlace>;

export const Default: Story = {
  render: () => (
    <div className="h-[600px]">
      <FindPlace onSearch={(data) => console.log("Selected cafe:", data)} />
    </div>
  ),
};
