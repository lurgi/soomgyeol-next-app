import Image from "next/image";
import { Search, Bell, ChevronLeft } from "lucide-react";
import { Body, Title } from "../font";
import Link from "next/link";
import { NAV_ITEMS, NavItemType } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type HeaderType = "main" | "detail";

interface HeaderProps {
  activeItem?: NavItemType;
  type?: HeaderType;
  title?: string;
  hasIcons?: boolean;
}

export default function Header({ activeItem, type = "main", title = "숨결", hasIcons = false }: HeaderProps) {
  const router = useRouter();
  return (
    <header className="w-full py-[10px] px-[16px] bg-background  md:border-b md:border-slate-200">
      <div className="w-full flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-3 md:hidden">
          {type === "main" && <Image src="/logo.svg" alt="숨결 로고" width={29} height={40} className="mr-1" />}
          {type === "detail" && (
            <button aria-label="뒤로가기" className="ml-[-8px] hover:cursor-pointer" onClick={() => router.back()}>
              <ChevronLeft width={40} height={40} />
            </button>
          )}
          <Title.T2 weight="medium">{title}</Title.T2>
        </div>

        <div className="items-center gap-10 hidden md:flex">
          <Link href="/home" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="숨결 로고" width={29} height={40} className="mr-1" />
            <Title.T2 weight="medium">숨결</Title.T2>
          </Link>

          <div className="hidden md:block">
            <Navbar activeItem={activeItem} />
          </div>
        </div>

        {/* 아이콘들 */}
        <div className="flex items-center gap-3">
          {hasIcons && (
            <>
              <button aria-label="검색">
                <Search className="w-6 h-6" />
              </button>
              <button aria-label="알림">
                <Bell className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

interface NavbarProps {
  activeItem?: NavItemType;
}

function Navbar({ activeItem }: NavbarProps) {
  const navItems: { type: Exclude<NavItemType, "home">; label: string }[] = [
    { type: NAV_ITEMS.POSTS, label: "게시글" },
    // { type: NAV_ITEMS.EDIT, label: "글 작성" },
    // { type: NAV_ITEMS.PROFILE, label: "프로필" },
  ];

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Link key={item.type} href={"/" + item.type.toLowerCase()}>
            <Body.B2
              weight="medium"
              className={cn("text-slate-500", activeItem === item.type && "text-slate-800 underline")}
            >
              {item.label}
            </Body.B2>
          </Link>
        ))}
      </div>
    </nav>
  );
}
