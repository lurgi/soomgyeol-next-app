"use client";

import React from "react";

type FontWeight = "regular" | "medium" | "bold";

interface CaptionProps {
  children: React.ReactNode;
  weight?: FontWeight;
  className?: string;
}

// Caption 컴포넌트의 기본 구현
const CaptionRoot = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: CaptionProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`font-${weight} ${className}`} {...props}>
      {children}
    </span>
  );
};

// Caption1 컴포넌트
const Caption1 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: CaptionProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <CaptionRoot weight={weight} className={`text-[0.875rem] leading-[140%] ${className}`} {...props}>
      {children}
    </CaptionRoot>
  );
};

// 합성 컴포넌트 패턴으로 Caption 컴포넌트 구성
export const Caption = Object.assign(CaptionRoot, {
  C1: Caption1,
});
