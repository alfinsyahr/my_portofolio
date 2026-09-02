'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GALLERY } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className='py-28'>
      <div className='section-container'>
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {GALLERY.map((item, i) => (
            <motion.a
              href='#projects'
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: 'easeOut' }}
              className='group relative overflow-hidden rounded-image border border-border block'
            >
              <div className='relative aspect-[16/9]'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover transition-transform duration-300 ease-smooth group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition duration-300 ease-smooth flex items-center justify-center'>
                  <span className='opacity-0 group-hover:opacity-100 transition duration-300 ease-smooth text-white text-sm font-medium tracking-wide'>
                    {t.gallery.viewProject}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
