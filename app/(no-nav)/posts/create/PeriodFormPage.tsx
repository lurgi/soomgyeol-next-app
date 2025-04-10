"use client";

import DatePicker from "@/app/components/DatePicker";
import Divider from "@/app/components/Divider";
import { Body } from "@/app/components/font";
import ImageInput from "@/app/components/ImageInput";
import TimePicker from "@/app/components/TimePicker";
import WeekdayPicker from "@/app/components/WeekdayPicker";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function PeriodFormPage() {
  const [selected, setSelected] = useState<DateRange | undefined>(undefined);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  return (
    <div className="mt-21">
      <div className="flex items-center justify-center py-3">
        <ImageInput type="square" />
      </div>

      <Divider height={4} />
      <label className="px-4 py-4 flex items-center justify-between gap-5">
        <Body.B2>수업 기간</Body.B2>
        <div className="flex-1">
          <DatePicker type="range" selected={selected} onSelect={setSelected} />
        </div>
      </label>

      <Divider height={4} />
      <div className="px-4 py-4 flex items-center justify-between gap-5">
        <Body.B2>수업 요일</Body.B2>
        <div className="flex-1">
          <WeekdayPicker selectedDays={selectedDays} onChange={setSelectedDays} />
        </div>
      </div>

      <Divider height={4} />
      <div className="px-4 py-4 flex items-center justify-between gap-5">
        <Body.B2>수업 시간</Body.B2>
        <div className="flex-1 flex gap-4">
          <TimePicker type="hour" value={hour} onChange={setHour} />
          <TimePicker type="minute" value={minute} onChange={setMinute} />
        </div>
      </div>

      <Divider height={4} />
      <LocationDrawer />
    </div>
  );
}

function LocationDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="w-full px-4 py-4 flex items-center justify-between gap-5">
          <Body.B2>수업 위치</Body.B2>
          <div className="text-slate-800">
            <ChevronRight size={24} />
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <DrawerTitle>수업 위치</DrawerTitle>
          <DrawerDescription>수업 위치를 선택해주세요.</DrawerDescription>
          {/* <FindPlace onSearch={(data) => console.log("Selected cafe:", data)} /> */}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
