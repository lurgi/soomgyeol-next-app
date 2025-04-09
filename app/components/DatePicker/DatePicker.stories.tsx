import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import DatePicker from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const SingleDatePicker: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <DatePicker type="single" selected={date} onSelect={setDate} />;
  },
};

export const RangeDatePicker: Story = {
  render: function Render() {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(),
    });
    return <DatePicker type="range" selected={date} onSelect={setDate} />;
  },
};
