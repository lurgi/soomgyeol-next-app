"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs 컴포넌트 내부에서만 사용할 수 있습니다");
  }
  return context;
};

interface TabsProps {
  defaultTab?: string;
  children: ReactNode;
}

interface TabProps {
  id: string;
  children: ReactNode;
  className?: string;
}

interface ContentProps {
  tabId: string;
  children: ReactNode;
  className?: string;
}

const Tabs = ({ defaultTab, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  const tabs: React.ReactElement[] = [];
  const contents: React.ReactElement[] = [];
  const otherElements: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === Tab) {
      tabs.push(child);
    } else if (child.type === Content) {
      contents.push(child);
    } else {
      otherElements.push(child);
    }
  });

  return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
};

const Tab = ({ id, children, className }: TabProps) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        "py-1.5 transition-colors w-full hover:cursor-pointer",
        isActive ? "border-b-2 border-slate-800 text-slate-800" : "text-slate-600 hover:text-gray-700",
        className
      )}
      aria-selected={isActive}
      role="tab"
    >
      {children}
    </button>
  );
};

const Content = ({ tabId, children, className }: ContentProps) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === tabId;

  if (!isActive) return null;

  return (
    <div className={cn("py-4", className)} role="tabpanel" aria-labelledby={tabId}>
      {children}
    </div>
  );
};

Tabs.Tab = Tab;
Tabs.Content = Content;

export default Tabs;
