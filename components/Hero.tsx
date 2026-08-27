'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section id='top' className='relative pt-40 pb-28 overflow-hidden'>
      <div className='section-container grid md:grid-cols-2 gap-16 items-center'>
        <div>
          <motion.p
            custom={0}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='text-muted text-lg'
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            custom={1}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='mt-2 text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-ink leading-tight tracking-tight'
          >
            Alfin Syahrin
          </motion.h1>

          <motion.p
            custom={2}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='mt-3 text-xl md:text-2xl font-heading font-extrabold text-accent'
          >
            Full Stack Developer &amp; AI Enthusiast
          </motion.p>

          <motion.p
            custom={3}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed'
          >
            Saya membangun Website dan Mobile App modern, AI application, dan
            IoT project.
          </motion.p>

          <motion.div
            custom={4}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='mt-8 flex flex-wrap items-center gap-4'
          >
            <Button href='#contact'>Contact Me</Button>
            <Button href='/resume.pdf' variant='secondary'>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            custom={5}
            initial='hidden'
            animate='visible'
            variants={fadeUp}
            className='mt-8'
          >
            <div className='flex flex-wrap items-center gap-3'>
              <Badge color='success' dot>
                Available for Work
              </Badge>
              <Badge color='success' dot>
                Available for Freelance
              </Badge>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className='relative flex justify-center md:justify-end'
        >
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='h-72 w-72 md:h-96 md:w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-soft' />
          </div>

          <div className='relative animate-float h-64 w-64 md:h-80 md:w-80 mx-auto'>
            {/* 1. Latar Belakang Lingkaran (Ukuran kembali pas seperti semula) */}
            <div className='absolute inset-0 rounded-full bg-white border border-border shadow-xl'></div>

            {/* 2. Layer Badan: Bagian bawah yang terpotong rapi di dalam lingkaran */}
            <div className='absolute inset-0 rounded-full overflow-hidden'>
              {/* Gambar diset lebih tinggi dari lingkaran (h-[120%]) dan diletakkan di bawah */}
              <div className='absolute bottom-0 w-full h-[120%]'>
                <Image
                  src='/Alfin_Profile.png'
                  alt='Foto Alfin Syahrin (Badan)'
                  fill
                  sizes='(max-width: 768px) 256px, 320px'
                  className='object-contain object-bottom'
                  priority
                />
              </div>
            </div>

            {/* 3. Layer Kepala: Bagian atas yang "Pop-Out" keluar dari lingkaran */}
            {/* Posisi dan ukurannya persis dengan layer badan, tapi clipPath menyembunyikan bagian bawahnya */}
            <div
              className='absolute bottom-0 w-full h-[120%] z-10 pointer-events-none'
              style={{ clipPath: 'inset(0 0 50% 0)' }}
            >
              <Image
                src='/Alfin_Profile.png'
                alt='Foto Alfin Syahrin (Kepala)'
                fill
                sizes='(max-width: 768px) 256px, 320px'
                className='object-contain object-bottom'
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
