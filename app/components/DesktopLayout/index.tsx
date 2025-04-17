"use client";

import { ReactNode } from "react";

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
  return <main className="w-full max-w-3xl">{children}</main>;
}

const DesktopLayout = Object.assign(DesktopLayoutRoot, {
  Header: DesktopLayoutHeader,
  Main: DesktopLayoutMain,
});

export default DesktopLayout;
