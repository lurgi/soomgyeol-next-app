"use client";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../Header";
import Navbar from "../Navbar";
import PullToRefresh from "./PullToRefresh";

interface MobileLayoutProps {
  children: ReactNode;
}

interface MobileLayoutHeaderProps {
  type?: "main" | "detail";
  title?: string;
  hasIcons?: boolean;
}

interface MobileLayoutMainProps {
  children: ReactNode;
  className?: string;
  onRefresh?: () => Promise<void> | void;
}

interface MobileLayoutNavbarProps {
  activeItem?: NavItemType;
}

const MobileLayoutHeader = ({ type = "main", title = "숨결", hasIcons = true }: MobileLayoutHeaderProps) => {
  return <Header type={type} title={title} hasIcons={hasIcons} />;
};

const MobileLayoutMain = ({ children, className = "", onRefresh }: MobileLayoutMainProps) => {
  return (
    <main className={`relative pt-[70px] pb-[100px] px-4 overflow-y-auto ${className}`}>
      <PullToRefresh onRefresh={onRefresh}>{children}</PullToRefresh>
    </main>
  );
};

const MobileLayoutNavbar = ({ activeItem }: MobileLayoutNavbarProps) => {
  return <Navbar activeItem={activeItem} />;
};

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const { scrollY } = useScroll({
    container: scrollContainerRef,
  });

  useEffect(() => {
    const handleScrollUpdate = () => {
      if (!scrollContainerRef.current || !ticking.current) {
        ticking.current = true;

        window.requestAnimationFrame(() => {
          const currentScrollY = scrollY.get();
          const threshold = 10;

          if (currentScrollY > lastScrollY.current + threshold) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY.current - threshold || currentScrollY <= 0) {
            setScrollDirection("up");
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
      }
    };

    const unsubscribe = scrollY.on("change", handleScrollUpdate);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const headerY = useTransform(scrollY, () => {
    return scrollDirection === "down" ? -100 : 0;
  });

  return (
    <div className="min-h-screen flex flex-col h-screen overflow-hidden bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 w-full z-50 will-change-transform"
        style={{
          y: headerY,
          transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === MobileLayoutHeader) {
            return child;
          }
          return null;
        })}
      </motion.div>

      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overscroll-none">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === MobileLayoutMain) {
            return child;
          }
          return null;
        })}
      </div>

      <div className="flex-shrink-0">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === MobileLayoutNavbar) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Object.assign(MobileLayout, {
  Header: MobileLayoutHeader,
  Main: MobileLayoutMain,
  Navbar: MobileLayoutNavbar,
});
