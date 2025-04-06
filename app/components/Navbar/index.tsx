"use client";

import React from "react";
import { Home, FileText, Edit, User, LucideIcon } from "lucide-react";
import Link from "next/link";
import { NAV_ITEMS, NavItemType } from "@/types/navigation";

interface NavbarProps {
  activeItem?: NavItemType;
}

interface NavItemProps {
  icon: LucideIcon;
  type: NavItemType;
  label: string;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, type, label, isActive }: NavItemProps) => {
  return (
    <Link className="w-1/4 flex flex-col items-center pt-[18px] pb-[34px]" href={"/" + type.toLowerCase()}>
      <button
        className={`flex flex-col items-center justify-center ${isActive ? "text-primary" : "text-muted-foreground"}`}
        aria-label={label}
      >
        <Icon className="w-6 h-6" />
      </button>
    </Link>
  );
};

export default function Navbar({ activeItem }: NavbarProps) {
  const navItems: { type: NavItemType; icon: LucideIcon; label: string }[] = [
    { type: NAV_ITEMS.HOME, icon: Home, label: "홈" },
    { type: NAV_ITEMS.POST, icon: FileText, label: "문서" },
    { type: NAV_ITEMS.EDIT, icon: Edit, label: "편집" },
    { type: NAV_ITEMS.PROFILE, icon: User, label: "프로필" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-100 z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.type}
            icon={item.icon}
            type={item.type}
            label={item.label}
            isActive={activeItem === item.type}
          />
        ))}
      </div>
    </nav>
  );
}
