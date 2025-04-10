/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from ".";
import { useState } from "react";

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const HourPicker: Story = {
  render: () => {
    const [hour, setHour] = useState("12");

    return <TimePicker type="hour" value={hour} onChange={setHour} />;
  },
};

export const MinutePicker: Story = {
  render: () => {
    const [minute, setMinute] = useState("30");

    return <TimePicker type="minute" value={minute} onChange={setMinute} />;
  },
};
