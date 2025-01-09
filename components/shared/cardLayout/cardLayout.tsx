import { HTMLAttributes, PropsWithChildren, ReactElement } from "react";

interface CardLayoutProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

const CardLayout = ({ children, className, ...rest }: CardLayoutProps) => {
  return (
    <div
      className={`h-full rounded-2xl bg-white p-4 shadow dark:bg-gray-800 md:p-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardLayout;
