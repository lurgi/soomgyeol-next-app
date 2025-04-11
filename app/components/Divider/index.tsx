import { cn } from "@/lib/utils";

interface DividerProps {
  height?: number;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ height = 8, className }) => {
  return <div className={cn("w-full bg-slate-50", className)} style={{ height: `${height}px` }} />;
};

export default Divider;
