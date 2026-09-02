'use client';

import { Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='border-t border-border py-8'>
      <div className='section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted'>
        <p>{t.footer.copyright}</p>
        <div className='flex items-center gap-2'>
          <span>{t.footer.builtWith}</span>
          <a
            href='https://github.com/alfinsyahr'
            target='_blank'
            rel='noreferrer'
            className='text-ink hover:text-accent transition duration-300 ease-smooth'
            aria-label='Github'
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
