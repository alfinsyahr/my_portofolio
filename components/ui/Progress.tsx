"use client";

import { motion } from "framer-motion";

export default function Progress({ value }: { value: number }) {
  return (
    <div className="progress-track h-2 w-full">
      <motion.div
        className="progress-fill h-2"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
