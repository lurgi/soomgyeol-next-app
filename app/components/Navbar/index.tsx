"use client";

import React from "react";
import { Home, FileText, Edit, User, LucideIcon } from "lucide-react";

type NavItemType = "home" | "document" | "edit" | "profile";

interface NavbarProps {
  activeItem?: NavItemType;
}

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, label, isActive }: NavItemProps) => {
  return (
    <div className="w-1/4 flex flex-col items-center pt-[18px] pb-[34px]">
      <button
        className={`flex flex-col items-center justify-center ${isActive ? "text-primary" : "text-muted-foreground"}`}
        aria-label={label}
      >
        <Icon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function Navbar({ activeItem }: NavbarProps) {
  const navItems: { type: NavItemType; icon: LucideIcon; label: string }[] = [
    { type: "home", icon: Home, label: "홈" },
    { type: "document", icon: FileText, label: "문서" },
    { type: "edit", icon: Edit, label: "편집" },
    { type: "profile", icon: User, label: "프로필" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-100 z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavItem key={item.type} icon={item.icon} label={item.label} isActive={activeItem === item.type} />
        ))}
      </div>
    </nav>
  );
}
