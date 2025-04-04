'use client';

import React from 'react';

type FontWeight = 'regular' | 'medium' | 'bold';

interface HeadingProps {
  children: React.ReactNode;
  weight?: FontWeight;
  className?: string;
}

// Heading 컴포넌트의 기본 구현
const HeadingRoot = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={`font-${weight} ${className}`} {...props}>
      {children}
    </h2>
  );
};

// Heading1 컴포넌트
const Heading1 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <HeadingRoot
      weight={weight}
      className={`text-[1.375rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </HeadingRoot>
  );
};

// Heading2 컴포넌트
const Heading2 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <HeadingRoot
      weight={weight}
      className={`text-[1.25rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </HeadingRoot>
  );
};

// Heading3 컴포넌트
const Heading3 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <HeadingRoot
      weight={weight}
      className={`text-[1.125rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </HeadingRoot>
  );
};

// 합성 컴포넌트 패턴으로 Heading 컴포넌트 구성
export const Heading = Object.assign(HeadingRoot, {
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
});
