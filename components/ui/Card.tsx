import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
};

export default function Card({ children, className, hoverLift = true }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-card border border-border rounded-card shadow-sm transition duration-300 ease-smooth",
        hoverLift && "hover:shadow-xl hover:-translate-y-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}
