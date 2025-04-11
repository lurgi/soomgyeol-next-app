"use client";

import { usePathname } from "next/navigation";
import MobileLayout from "../components/MobileLayout";
import { NAV_ITEMS, NavItemType } from "@/types/navigation";
import useIsMobile from "../hooks/useIsMobile";
import Header from "../components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  let activeItem: NavItemType | undefined;

  if (pathname.includes("/home")) {
    activeItem = NAV_ITEMS.HOME;
  } else if (pathname.includes("/posts")) {
    activeItem = NAV_ITEMS.POSTS;
  } else if (pathname.includes("/profile")) {
    activeItem = NAV_ITEMS.PROFILE;
  }

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <MobileLayout.Header />
          <MobileLayout.Main>{children}</MobileLayout.Main>
          <MobileLayout.Navbar activeItem={activeItem} />
        </MobileLayout>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Header activeItem={activeItem} />
          <main className="w-full max-w-5xl">{children}</main>
        </div>
      )}
    </>
  );
}
