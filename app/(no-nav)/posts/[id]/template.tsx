"use client";

import DesktopLayout from "@/app/components/DesktopLayout";
import Header from "@/app/components/Header";
import Loader from "@/app/components/Loader";
import MobileLayout from "@/app/components/MobileLayout";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Suspense } from "react";

export default function PostDetailTemplate({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileLayout>
      <MobileLayout.Header type="detail" title="" />
      <MobileLayout.Main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </MobileLayout.Main>
    </MobileLayout>
  ) : (
    <DesktopLayout>
      <DesktopLayout.Header>
        <Header />
      </DesktopLayout.Header>
      <DesktopLayout.Main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </DesktopLayout.Main>
    </DesktopLayout>
  );
}
