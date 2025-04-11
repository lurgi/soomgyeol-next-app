"use client";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup } from "@/components/ui/select";
import { Body } from "../font";
import { cn } from "@/lib/utils";

type TimePickerType = "hour" | "minute";

interface TimePickerProps {
  type: TimePickerType;
  value: string;
  onChange: (value: string) => void;
}

const TimePicker = ({ type, value, onChange }: TimePickerProps) => {
  const options =
    type === "hour"
      ? Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
      : Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));

  const suffix = type === "hour" ? "시" : "분";

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "w-full !h-fit  !py-2",
          value ? "!text-slate-800 !border-slate-400" : "!text-slate-500 !border-slate-300"
        )}
      >
        <Body.B2 weight={value ? "medium" : "regular"}>
          {value} {suffix}
        </Body.B2>
      </SelectTrigger>
      <SelectContent
        className="h-[200px]"
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              <Body.B2>
                {option} {suffix}
              </Body.B2>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TimePicker;
