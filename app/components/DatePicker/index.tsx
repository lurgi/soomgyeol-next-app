"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ko } from "date-fns/locale";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Body } from "../font";

interface DateSinglePickerProps {
  type: "single";
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

interface DateRangePickerProps {
  type: "range";
  selected: DateRange | undefined;
  onSelect: (date: DateRange | undefined) => void;
}

export default function DatePicker({ type, selected, onSelect }: DateSinglePickerProps | DateRangePickerProps) {
  const displayDate = React.useMemo(() => {
    if (type === "range" && (selected as DateRange)?.from) {
      const range = selected as DateRange;
      return range.to
        ? `${format(range.from as Date, "PPP", { locale: ko })} - ${format(range.to, "PPP", { locale: ko })}`
        : format(range.from as Date, "PPP", { locale: ko });
    } else if (type === "single" && selected) {
      return format(selected as Date, "PPP", { locale: ko });
    }
    return "일정을 선택하세요";
  }, [type, selected]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "inline-flex w-full items-center gap-2 justify-start text-slate-700 border border-slate-300 rounded-md py-2 px-3 h-fit",
            !(selected && (type === "single" ? selected : (selected as DateRange).from)) && "text-slate-400"
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          <Body.B2>{displayDate}</Body.B2>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {type === "single" ? (
          <Calendar
            mode="single"
            selected={selected as Date | undefined}
            onSelect={onSelect as (date: Date | undefined) => void}
            initialFocus
            locale={ko}
          />
        ) : (
          <Calendar
            mode="range"
            selected={selected as DateRange | undefined}
            onSelect={onSelect as (date: DateRange | undefined) => void}
            initialFocus
            locale={ko}
            numberOfMonths={1}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
