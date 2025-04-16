"use client";

import { usePathname } from "next/navigation";
import MobileLayout from "../components/MobileLayout";
import { NAV_ITEMS, NavItemType } from "@/types/navigation";
import useIsMobile from "../hooks/useIsMobile";
import Header from "../components/Header";
import DesktopLayout from "../components/DesktopLayout";
import { Suspense } from "react";
import Loader from "../components/Loader";

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
          <MobileLayout.Main>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </MobileLayout.Main>
          <MobileLayout.Navbar activeItem={activeItem} />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <DesktopLayout.Header>
            <Header activeItem={activeItem} />
          </DesktopLayout.Header>
          <DesktopLayout.Main>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </DesktopLayout.Main>
        </DesktopLayout>
      )}
    </>
  );
}
