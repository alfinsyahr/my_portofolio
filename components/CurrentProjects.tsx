'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function CurrentProjects() {
  const { t } = useLanguage();

  return (
    <section className='py-28'>
      <div className='section-container'>
        <SectionHeading
          eyebrow={t.currentProjects.eyebrow}
          title={t.currentProjects.title}
          subtitle={t.currentProjects.subtitle}
        />

        <div className='mt-16 relative max-w-2xl mx-auto'>
          <div className='absolute left-[7px] top-2 bottom-2 w-px bg-border' />

          <div className='flex flex-col gap-12'>
            {t.currentProjects.list.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }}
                className='relative pl-9'
              >
                <span className='absolute left-0 top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-accent/15' />

                <div className='flex items-center justify-between gap-4 flex-wrap'>
                  <h3 className='font-heading font-extrabold text-ink text-lg'>
                    {project.name}
                  </h3>
                  <Badge color='accent' dot>
                    {t.currentProjects.inProgressBadge}
                  </Badge>
                </div>

                <p className='mt-2 text-muted text-sm md:text-base leading-relaxed'>
                  {project.description}
                </p>

                <div className='mt-4 flex items-center gap-3'>
                  <div className='flex-1'>
                    <Progress value={project.progress} />
                  </div>
                  <span className='text-xs text-muted w-9 text-right'>
                    {project.progress}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
