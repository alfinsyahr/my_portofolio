'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { SOCIALS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const ICONS: Record<string, typeof Mail> = {
  Mail,
  Linkedin,
  Github,
  Instagram,
};

export default function Contact() {
  return (
    <section id='contact' className='py-28'>
      <div className='section-container'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card className='p-10 md:p-16 text-center' hoverLift={false}>
            <h2 className='text-3xl md:text-4xl font-heading font-extrabold text-ink'>
              Let&apos;s Build Something Together.
            </h2>

            <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
              {SOCIALS.map((social) => {
                const Icon = ICONS[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel='noreferrer'
                    className='flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-ink hover:border-accent hover:text-accent transition duration-300 ease-smooth'
                  >
                    <Icon size={16} /> {social.label}
                  </a>
                );
              })}
            </div>

            <div className='mt-10'>
              <Button href='mailto:syahrinalfin105@gmail.com'>
                Send Message
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
