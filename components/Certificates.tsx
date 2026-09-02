'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section className='py-28'>
      <div className='section-container'>
        <SectionHeading
          eyebrow={t.certificates.eyebrow}
          title={t.certificates.title}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          className='mt-16 flex flex-col gap-4 max-w-3xl mx-auto'
        >
          {t.certificates.list.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                hoverLift={false}
                className='flex items-center gap-5 p-5 shadow-xs hover:shadow-md transition-shadow duration-200'
              >
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                  <Award size={20} />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='font-heading font-extrabold text-ink truncate'>
                    {cert.name}
                  </h3>
                  <p className='text-sm text-muted'>
                    {cert.institution} &middot; {cert.date}
                  </p>
                </div>
                <a
                  href='#'
                  className='hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition duration-300 ease-smooth shrink-0'
                >
                  {t.certificates.viewCert} <ExternalLink size={14} />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
