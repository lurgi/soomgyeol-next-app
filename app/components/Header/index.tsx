"use client";

import Image from "next/image";
import { Search, Bell, ChevronLeft } from "lucide-react";
import { Title } from "../font";

type HeaderType = "main" | "detail";

interface HeaderProps {
  type?: HeaderType;
  title?: string;
  hasIcons?: boolean;
}

export default function Header({ type = "main", title = "숨결", hasIcons = true }: HeaderProps) {
  return (
    <header className="w-full py-[10px] px-[16px] bg-background">
      <div className="container flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {type === "main" && <Image src="/logo.svg" alt="숨결 로고" width={29} height={40} className="mr-1" />}
          {type === "detail" && (
            <button aria-label="뒤로가기" className="ml-[-8px]">
              <ChevronLeft width={40} height={40} />
            </button>
          )}

          <Title.T2 weight="medium">{title}</Title.T2>
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
