import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  avatar?: string;
  size?: number;
  className?: string;
}

const Avatar = ({ name, avatar, size = 24, className }: AvatarProps) => {
  const sizeClasses = {
    width: {
      16: "w-4",
      20: "w-5",
      24: "w-6",
      28: "w-7",
      32: "w-8",
      36: "w-9",
      40: "w-10",
      48: "w-12",
      56: "w-14",
      64: "w-16",
      72: "w-18",
      80: "w-20",
      96: "w-24",
    },
    height: {
      16: "h-4",
      20: "h-5",
      24: "h-6",
      28: "h-7",
      32: "h-8",
      36: "h-9",
      40: "h-10",
      48: "h-12",
      56: "h-14",
      64: "h-16",
      72: "h-18",
      80: "h-20",
      96: "h-24",
    },
    fontSize: {
      16: "text-xs",
      20: "text-xs",
      24: "text-xs",
      28: "text-xs",
      32: "text-sm",
      36: "text-sm",
      40: "text-sm",
      48: "text-base",
      56: "text-base",
      64: "text-lg",
      72: "text-lg",
      80: "text-xl",
      96: "text-2xl",
    },
  };

  const standardSizes = Object.keys(sizeClasses.width).map(Number);
  const closestSize = standardSizes.reduce((prev, curr) => {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });

  const widthClass = sizeClasses.width[closestSize as keyof typeof sizeClasses.width];
  const heightClass = sizeClasses.height[closestSize as keyof typeof sizeClasses.height];
  const fontSizeClass = sizeClasses.fontSize[closestSize as keyof typeof sizeClasses.fontSize];

  return avatar ? (
    <div className={cn("relative rounded-full overflow-hidden", widthClass, heightClass, className)}>
      <Image src={avatar} alt={`${name}의 프로필 이미지`} fill className="object-cover" />
    </div>
  ) : (
    <div
      className={cn(
        "rounded-full bg-slate-200 flex items-center justify-center",
        widthClass,
        heightClass,
        fontSizeClass,
        className
      )}
    >
      <span className="text-slate-600">{name.charAt(0)}</span>
    </div>
  );
};

export default Avatar;
