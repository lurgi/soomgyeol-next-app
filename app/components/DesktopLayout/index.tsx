"use client";

import { ReactNode, Suspense } from "react";
import Loader from "../Loader";

interface DesktopLayoutProps {
  children: ReactNode;
}

function DesktopLayoutRoot({ children }: DesktopLayoutProps) {
  return <div className="flex flex-col justify-center items-center mb-20">{children}</div>;
}

function DesktopLayoutHeader({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function DesktopLayoutMain({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loader />}>
      <main className="w-full max-w-3xl">{children}</main>
    </Suspense>
  );
}

const DesktopLayout = Object.assign(DesktopLayoutRoot, {
  Header: DesktopLayoutHeader,
  Main: DesktopLayoutMain,
});

export default DesktopLayout;
