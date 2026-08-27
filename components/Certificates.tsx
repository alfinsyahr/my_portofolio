"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/lib/constants";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certificates() {
  return (
    <section className="py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Recognitions" title="Certificates" />

        <div className="mt-16 flex flex-col gap-4 max-w-3xl mx-auto">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
            >
              <Card className="flex items-center gap-5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-extrabold text-ink truncate">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted">
                    {cert.institution} &middot; {cert.date}
                  </p>
                </div>
                <a
                  href="#"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition duration-300 ease-smooth shrink-0"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
