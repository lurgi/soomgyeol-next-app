type FontWeight = "regular" | "medium" | "bold";

interface TitleProps {
  children: React.ReactNode;
  weight?: FontWeight;
  className?: string;
}

const TitleRoot = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={`font-${weight} ${className}`} {...props}>
      {children}
    </h1>
  );
};

const Title1 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot weight={weight} className={`text-[1.75rem] leading-[130%] ${className}`} {...props}>
      {children}
    </TitleRoot>
  );
};

const Title2 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot weight={weight} className={`text-[1.625rem] leading-[130%] ${className}`} {...props}>
      {children}
    </TitleRoot>
  );
};

const Title3 = ({
  children,
  weight = "regular",
  className = "",
  ...props
}: TitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <TitleRoot weight={weight} className={`text-[1.5rem] leading-[130%] ${className}`} {...props}>
      {children}
    </TitleRoot>
  );
};

const Title = TitleRoot as typeof TitleRoot & {
  T1: typeof Title1;
  T2: typeof Title2;
  T3: typeof Title3;
};

Title.T1 = Title1;
Title.T2 = Title2;
Title.T3 = Title3;

export { Title };
