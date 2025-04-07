"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Body } from "../font";

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
  className?: string;
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

const Tabs = ({ defaultTab, children, className }: TabsProps) => {
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

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>
        {tabs.length > 0 && <div className="flex border-b px-4 border-slate-300 justify-between mb-4">{tabs}</div>}
        {otherElements}
        {contents}
      </div>
    </TabsContext.Provider>
  );
};

const Tab = ({ id, children, className }: TabProps) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        "py-1.5 transition-colors",
        isActive ? "border-1 border-b-2 border-slate-800 text-slate-800" : "text-slate-600 hover:text-gray-700",
        className
      )}
      aria-selected={isActive}
      role="tab"
    >
      <Body.B1>{children}</Body.B1>
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
