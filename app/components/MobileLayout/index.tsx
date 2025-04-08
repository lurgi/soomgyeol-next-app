"use client";

import React, { useState, useRef, ReactNode, useEffect, createContext, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { createPortal } from "react-dom";
import Header from "../Header";
import PullToRefresh from "./PullToRefresh";
import { NavItemType } from "@/types/navigation";
import Navbar from "../Navbar";

interface MobileLayoutContextType {
  hasSubHeader: boolean;
  setHasSubHeader: (value: boolean) => void;
  hasBottomOverlay: boolean;
  setHasBottomOverlay: (value: boolean) => void;
}

const MobileLayoutContext = createContext<MobileLayoutContextType>({
  hasSubHeader: false,
  setHasSubHeader: () => {},
  hasBottomOverlay: false,
  setHasBottomOverlay: () => {},
});

const useMobileLayout = () => useContext(MobileLayoutContext);

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

interface MobileLayoutSubHeaderProps {
  children: ReactNode;
}

interface MobileLayoutBottomOverlayProps {
  children: ReactNode;
}

const MobileLayoutHeader = ({ type = "main", title = "숨결", hasIcons = true }: MobileLayoutHeaderProps) => {
  return (
    <div className="pt-[var(--safe-area-top)]">
      <Header type={type} title={title} hasIcons={hasIcons} />
    </div>
  );
};

const MobileLayoutMain = ({ children, className = "", onRefresh }: MobileLayoutMainProps) => {
  return (
    <main
      className={`relative  "pt-15"
      } pb-[calc(100px+var(--safe-area-bottom))] overflow-y-auto ${className}`}
    >
      <PullToRefresh onRefresh={onRefresh}>{children}</PullToRefresh>
    </main>
  );
};

const MobileLayoutNavbar = ({ activeItem }: MobileLayoutNavbarProps) => {
  return <Navbar activeItem={activeItem} />;
};

const MobileLayoutSubHeader = ({ children }: MobileLayoutSubHeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const { setHasSubHeader } = useMobileLayout();

  useEffect(() => {
    setMounted(true);
    setHasSubHeader(true);
    return () => {
      setMounted(false);
      setHasSubHeader(false);
    };
  }, [setHasSubHeader]);

  if (!mounted) return null;

  const subHeaderPortalTarget = document.getElementById("mobile-layout-subheader-portal");

  if (!subHeaderPortalTarget) return null;

  return createPortal(
    <div className="sticky top-0 left-0 right-0 w-full z-40 bg-white border-b border-slate-200">{children}</div>,
    subHeaderPortalTarget
  );
};

const MobileLayoutBottomOverlay = ({ children }: MobileLayoutBottomOverlayProps) => {
  const [mounted, setMounted] = useState(false);
  const { setHasBottomOverlay } = useMobileLayout();

  useEffect(() => {
    setMounted(true);
    setHasBottomOverlay(true);
    return () => {
      setMounted(false);
      setHasBottomOverlay(false);
    };
  }, [setHasBottomOverlay]);

  if (!mounted) return null;

  const portalTarget = document.getElementById("mobile-layout-bottom-portal");
  if (!portalTarget) return null;

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white pb-[var(--safe-area-bottom)]">{children}</div>,
    portalTarget
  );
};

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [hasSubHeader, setHasSubHeader] = useState(false);
  const [hasBottomOverlay, setHasBottomOverlay] = useState(false);
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
    return scrollDirection === "down" ? -57 : 0;
  });

  return (
    <MobileLayoutContext.Provider value={{ hasSubHeader, setHasSubHeader, hasBottomOverlay, setHasBottomOverlay }}>
      <div className="min-h-screen flex flex-col h-screen overflow-hidden bg-background relative">
        <motion.div
          className="fixed top-0 left-0 right-0 w-full z-50 will-change-transform"
          style={{
            y: headerY,
            transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === MobileLayoutHeader) {
              return (
                <>
                  {child}
                  <div id="mobile-layout-subheader-portal" className="w-full"></div>
                </>
              );
            }
            return <div id="mobile-layout-subheader-portal" className="w-full"></div>;
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

        <div className="flex-shrink-0 pb-[var(--safe-area-bottom)]">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === MobileLayoutNavbar) {
              return child;
            }
            return null;
          })}
        </div>
      </div>

      <div id="mobile-layout-bottom-portal"></div>
    </MobileLayoutContext.Provider>
  );
};

export default Object.assign(MobileLayout, {
  Header: MobileLayoutHeader,
  Main: MobileLayoutMain,
  Navbar: MobileLayoutNavbar,
  SubHeader: MobileLayoutSubHeader,
  BottomOverlay: MobileLayoutBottomOverlay,
});
