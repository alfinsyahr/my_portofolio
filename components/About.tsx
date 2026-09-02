'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ICONS: Record<string, typeof MapPin> = {
  location: MapPin,
  education: GraduationCap,
  role: Briefcase,
  interest: Rocket,
};

export default function About() {
  const { t } = useLanguage();

  const quickInfoItems = [
    { iconKey: 'location', label: t.about.quickInfo.location },
    { iconKey: 'education', label: t.about.quickInfo.education },
    { iconKey: 'role', label: t.about.quickInfo.role },
    { iconKey: 'interest', label: t.about.quickInfo.interest },
  ];

  return (
    <section id='about' className='py-28'>
      <div className='section-container grid md:grid-cols-2 gap-16'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className='text-sm font-medium text-accent tracking-wide'>
            {t.about.eyebrow}
          </span>
          <h2 className='mt-2 text-3xl md:text-4xl font-heading font-extrabold text-ink'>
            {t.about.title}
          </h2>

          <p className='mt-6 text-muted text-base leading-relaxed max-w-sm'>
            {t.about.intro}
          </p>

          <div className='mt-8 flex items-center gap-6'>
            <div>
              <p className='text-2xl font-heading font-extrabold text-ink'>
                {t.about.stat1Value}
              </p>
              <p className='text-xs text-muted mt-1'>{t.about.stat1Label}</p>
            </div>
            <div className='h-8 w-px bg-border' />
            <div>
              <p className='text-2xl font-heading font-extrabold text-ink'>
                {t.about.stat2Value}
              </p>
              <p className='text-xs text-muted mt-1'>{t.about.stat2Label}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <p className='text-muted text-base md:text-lg leading-relaxed'>
            {t.about.aboutText}
          </p>

          <div className='mt-8 grid grid-cols-2 gap-4'>
            {quickInfoItems.map((info, i) => {
              const Icon = ICONS[info.iconKey] || MapPin;
              return (
                <motion.div
                  key={info.label + i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className='flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3'
                >
                  <Icon size={18} className='text-accent shrink-0' />
                  <span className='text-sm text-ink'>{info.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
