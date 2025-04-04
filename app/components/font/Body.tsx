"use client";

import React from "react";

type FontWeight = "regular" | "medium" | "bold";

interface BodyProps {
  children: React.ReactNode;
  weight?: FontWeight;
  className?: string;
}

// Body 컴포넌트의 기본 구현
const BodyRoot = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: BodyProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={`font-${weight} ${className}`} {...props}>
      {children}
    </p>
  );
};

// Body1 컴포넌트
const Body1 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: BodyProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <BodyRoot weight={weight} className={`text-[1.125rem] leading-[150%] ${className}`} {...props}>
      {children}
    </BodyRoot>
  );
};

// Body2 컴포넌트
const Body2 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: BodyProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <BodyRoot weight={weight} className={`text-[1rem] leading-[150%] ${className}`} {...props}>
      {children}
    </BodyRoot>
  );
};

// 합성 컴포넌트 패턴으로 Body 컴포넌트 구성
export const Body = Object.assign(BodyRoot, {
  B1: Body1,
  B2: Body2,
});
