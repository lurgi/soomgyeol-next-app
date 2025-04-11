import { Button } from "@/components/ui/button";
import { Heading } from "../font";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface BottomFloatingButtonProps extends PropsWithChildren {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function BottomFloatingButton({ children, disabled = false, onClick }: BottomFloatingButtonProps) {
  return (
    <div className="pb-[calc(8px+var(--safe-area-bottom))] px-6 pt-2">
      <Button
        className={cn("w-full bg-blue-200 text-slate-800", disabled && "bg-blue-50 text-slate-500")}
        disabled={disabled}
        onClick={onClick}
      >
        <Heading.H2 weight="medium">{children}</Heading.H2>
      </Button>
    </div>
  );
}
