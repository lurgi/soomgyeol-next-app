import type { Meta, StoryObj } from "@storybook/react";
import WeekdayPicker from ".";
import { useState } from "react";

const meta: Meta<typeof WeekdayPicker> = {
  title: "Components/WeekdayPicker",
  component: WeekdayPicker,
};

export default meta;
type Story = StoryObj<typeof WeekdayPicker>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDays, setSelectedDays] = useState<number[]>([1, 3]);

    return (
      <WeekdayPicker
        selectedDays={selectedDays}
        onChange={(days) => {
          console.log("Selected days:", days);
          setSelectedDays(days);
        }}
      />
    );
  },
};
