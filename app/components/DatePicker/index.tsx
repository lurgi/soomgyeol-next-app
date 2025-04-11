"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ko } from "date-fns/locale";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
        ? `${format(range.from as Date, "yy.MM.dd")} - ${format(range.to, "yy.MM.dd")}`
        : format(range.from as Date, "yy.MM.dd");
    } else if (type === "single" && selected) {
      return format(selected as Date, "yy.MM.dd");
    }
    return "일정을 선택하세요";
  }, [type, selected]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
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
      </DrawerTrigger>
      <DrawerContent className="flex flex-col items-center">
        <div className="w-fit pt-4 pb-[calc(16px+var(--safe-area-bottom))]">
          {type === "single" ? (
            <>
              <DrawerHeader>
                <DrawerTitle>날짜 선택</DrawerTitle>
                <DrawerDescription>날짜를 선택해주세요.</DrawerDescription>
              </DrawerHeader>
              <Calendar
                mode="single"
                selected={selected as Date | undefined}
                onSelect={onSelect as (date: Date | undefined) => void}
                initialFocus
                locale={ko}
              />
            </>
          ) : (
            <>
              <DrawerHeader>
                <DrawerTitle>일정기간 선택</DrawerTitle>
                <DrawerDescription>일정기간을 선택해주세요.</DrawerDescription>
              </DrawerHeader>
              <Calendar
                mode="range"
                selected={selected as DateRange | undefined}
                onSelect={onSelect as (date: DateRange | undefined) => void}
                initialFocus
                locale={ko}
                numberOfMonths={1}
              />
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
