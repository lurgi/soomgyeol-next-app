import { cn } from "@/lib/utils";
import { Body } from "../font";

const weekdays = ["월", "화", "수", "목", "금", "토", "일"];

function WeekdayButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-9 h-9 border rounded-md",
        selected ? "bg-blue-300 text-slate-800 border-blue-300" : "bg-white text-slate-400 border-slate-400"
      )}
    >
      <Body.B1>{label}</Body.B1>
    </button>
  );
}

export default function WeekdayPicker({
  selectedDays,
  onChange,
}: {
  selectedDays: number[];
  onChange: (days: number[]) => void;
}) {
  const toggleDay = (index: number) => {
    const newDays = selectedDays.includes(index) ? selectedDays.filter((i) => i !== index) : [...selectedDays, index];
    onChange(newDays);
  };

  return (
    <div className="flex justify-between items-center">
      {weekdays.map((day, index) => (
        <WeekdayButton key={day} label={day} selected={selectedDays.includes(index)} onClick={() => toggleDay(index)} />
      ))}
    </div>
  );
}
