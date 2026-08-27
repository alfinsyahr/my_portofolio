import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  color?: "success" | "accent" | "neutral";
  className?: string;
  dot?: boolean;
};

export default function Badge({
  children,
  color = "neutral",
  className,
  dot = false,
}: BadgeProps) {
  const colors: Record<string, string> = {
    success: "bg-success/10 text-success border-success/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    neutral: "bg-border/40 text-muted border-border",
  };

  const dotColors: Record<string, string> = {
    success: "bg-success",
    accent: "bg-accent",
    neutral: "bg-muted",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        colors[color],
        className
      )}
    >
      {dot && (
        <span
          className={clsx("h-1.5 w-1.5 rounded-full", dotColors[color])}
        />
      )}
      {children}
    </span>
  );
}
