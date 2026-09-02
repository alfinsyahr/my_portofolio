'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section id='projects' className='py-28'>
      <div className='section-container'>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className='mt-20 flex flex-col gap-28'>
          {t.projects.list.map((project, i) => {
            const reversed = i % 2 === 1;
            const isCompleted = project.status === 'Completed';
            const statusLabel = isCompleted
              ? t.projects.statusCompleted
              : t.projects.statusInProgress;

            return (
              <div
                key={project.slug}
                className='grid md:grid-cols-2 gap-10 md:gap-16 items-center'
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={reversed ? 'md:order-2' : ''}
                >
                  <div className='group relative overflow-hidden rounded-image border border-border shadow-sm'>
                    <div className='relative aspect-[16/9]'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='object-cover transition-transform duration-300 ease-smooth group-hover:scale-[1.03]'
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className={reversed ? 'md:order-1' : ''}
                >
                  <Badge color='accent'>{project.category}</Badge>
                  <h3 className='mt-4 text-2xl md:text-3xl font-heading font-extrabold text-ink'>
                    {project.name}
                  </h3>

                  <p className='mt-4 text-muted leading-relaxed'>
                    {project.description}
                  </p>

                  <ul className='mt-5 grid grid-cols-2 gap-2'>
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className='flex items-center gap-2 text-sm text-ink'
                      >
                        <span className='text-success font-bold'>✔</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className='text-xs px-2.5 py-1 rounded-full bg-border/40 text-muted'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='mt-5 flex items-center gap-4 text-sm text-muted'>
                    <span className='flex items-center gap-1.5'>
                      <Clock size={14} /> {project.duration}
                    </span>
                    <Badge color={isCompleted ? 'success' : 'accent'} dot>
                      {statusLabel}
                    </Badge>
                  </div>

                  <div className='mt-7 flex flex-wrap gap-3'>
                    {project.github && (
                      <Button
                        href={project.github}
                        variant='secondary'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Github size={16} /> {t.projects.viewGithub}
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        href={project.demo}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <ExternalLink size={16} /> {t.projects.viewLive}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
