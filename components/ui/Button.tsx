"use client";

import { ReactNode, MouseEvent, useState } from "react";
import clsx from "clsx";

type Ripple = { x: number; y: number; size: number; id: number };

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

let rippleId = 0;

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = rippleId++;
    setRipples((prev) => [...prev, { x, y, size, id }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition duration-300 ease-smooth select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-white text-ink border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5",
    ghost: "text-ink hover:text-accent",
  };

  const content = (
    <>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-[ripple_0.6s_ease-out]"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.6;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          spawnRipple(e);
          onClick?.();
        }}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.();
      }}
      className={classes}
    >
      {content}
    </button>
  );
}
