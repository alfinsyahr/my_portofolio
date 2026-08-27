"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Server,
  Database,
  BrainCircuit,
  Cpu,
  Wrench,
} from "lucide-react";
import { SKILLS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, typeof MonitorSmartphone> = {
  MonitorSmartphone,
  Server,
  Database,
  BrainCircuit,
  Cpu,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          subtitle="Teknologi dan tools yang saya gunakan untuk membangun produk digital."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: "easeOut" }}
              >
                <Card className="p-6 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-heading font-extrabold text-ink">
                    {group.category}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
