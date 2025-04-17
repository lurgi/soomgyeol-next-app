"use client";

import React from "react";
import { Home, FileText, Edit, User, LucideIcon, XCircle } from "lucide-react";
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
  disabled?: boolean;
}

const NavItem = ({ icon: Icon, type, label, isActive, disabled }: NavItemProps) => {
  if (disabled) {
    return (
      <div className="w-1/4 flex flex-col items-center py-4.5 opacity-50">
        <button
          className={`flex flex-col items-center justify-center ${isActive ? "text-primary" : "text-muted-foreground"}`}
          aria-label={label}
        >
          <XCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }
  return (
    <Link className="w-1/4 flex flex-col items-center py-4.5" href={"/" + type.toLowerCase()}>
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
  const navItems: { type: NavItemType; icon: LucideIcon; label: string; disabled?: boolean }[] = [
    { type: NAV_ITEMS.HOME, icon: Home, label: "홈" },
    { type: NAV_ITEMS.POSTS, icon: FileText, label: "문서" },
    { type: NAV_ITEMS.EDIT, icon: Edit, label: "편집", disabled: true },
    { type: NAV_ITEMS.PROFILE, icon: User, label: "프로필", disabled: true },
  ];

  return (
    <nav className="w-full bg-slate-100">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.type}
            icon={item.icon}
            type={item.type}
            label={item.label}
            isActive={activeItem === item.type}
            disabled={item?.disabled}
          />
        ))}
      </div>
    </nav>
  );
}
