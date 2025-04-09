"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ko } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Body } from "../font";

export default function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "inline-flex w-full items-center gap-2 justify-start text-slate-700 border border-slate-300 rounded-md py-2 px-3 h-fit",
            !date && "text-slate-400"
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          <Body.B2>{date ? format(date, "PPP", { locale: ko }) : "일정을 선택하세요"}</Body.B2>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={ko} />
      </PopoverContent>
    </Popover>
  );
}
