"use client";

import { usePathname } from "next/navigation";
import MobileLayout from "../components/MobileLayout";
import { NAV_ITEMS, NavItemType } from "@/types/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  let activeItem: NavItemType | undefined;

  if (pathname.includes("/home")) {
    activeItem = NAV_ITEMS.HOME;
  } else if (pathname.includes("/posts")) {
    activeItem = NAV_ITEMS.POSTS;
  } else if (pathname.includes("/profile")) {
    activeItem = NAV_ITEMS.PROFILE;
  }

  return (
    <MobileLayout>
      <MobileLayout.Header />
      <MobileLayout.Main>{children}</MobileLayout.Main>
      <MobileLayout.Navbar activeItem={activeItem} />
    </MobileLayout>
  );
}
