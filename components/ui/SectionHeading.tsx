"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <span className="text-sm font-medium text-accent tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            "mt-4 text-muted text-base md:text-lg " +
            (align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")
          }
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
