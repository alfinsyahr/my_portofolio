"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Journey so far"
          title="Experience"
        />

        <div className="mt-16 relative max-w-2xl mx-auto">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
                className="relative pl-9"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/15" />
                <span className="text-sm font-medium text-accent">{exp.year}</span>
                <h3 className="mt-1 font-heading font-extrabold text-ink text-lg">
                  {exp.title}
                </h3>
                <p className="mt-2 text-muted text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
