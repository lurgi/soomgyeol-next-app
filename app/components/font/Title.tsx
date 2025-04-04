'use client';

import React from 'react';

type FontWeight = 'regular' | 'medium' | 'bold';

interface TitleProps {
  children: React.ReactNode;
  weight?: FontWeight;
  className?: string;
}

// Title 컴포넌트의 기본 구현
const TitleRoot = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={`font-${weight} ${className}`} {...props}>
      {children}
    </h1>
  );
};

// Title1 컴포넌트
const Title1 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot
      weight={weight}
      className={`text-[1.75rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </TitleRoot>
  );
};

// Title2 컴포넌트
const Title2 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot
      weight={weight}
      className={`text-[1.625rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </TitleRoot>
  );
};

// Title3 컴포넌트
const Title3 = ({
  children,
  weight = 'regular',
  className = '',
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot
      weight={weight}
      className={`text-[1.5rem] leading-[130%] ${className}`}
      {...props}
    >
      {children}
    </TitleRoot>
  );
};

// 합성 컴포넌트 패턴으로 Title 컴포넌트 구성
export const Title = Object.assign(TitleRoot, {
  T1: Title1,
  T2: Title2,
  T3: Title3,
});
