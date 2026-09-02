'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import clsx from 'clsx';

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border border-border bg-white/90 p-1 shadow-xs backdrop-blur-md select-none',
        className
      )}
      role='group'
      aria-label='Language selector'
    >
      <div
        className='flex items-center pl-2 pr-1.5 text-muted'
        aria-hidden='true'
      >
        <Globe size={14} className='text-muted' />
      </div>

      <div className='relative flex items-center bg-gray-100 rounded-full p-0.5'>
        {/* Sliding background indicator pill */}
        <div
          className={clsx(
            'absolute top-0.5 bottom-0.5 w-7 rounded-full bg-accent shadow-xs transition-transform duration-200 ease-out pointer-events-none',
            language === 'id' ? 'translate-x-0' : 'translate-x-7'
          )}
          aria-hidden='true'
        />

        <button
          type='button'
          onClick={() => setLanguage('id')}
          aria-label='Bahasa Indonesia'
          title='Bahasa Indonesia'
          className={clsx(
            'relative z-10 w-7 py-0.5 text-center text-xs font-semibold rounded-full transition-colors duration-150 cursor-pointer',
            language === 'id'
              ? 'text-white font-bold'
              : 'text-muted hover:text-ink'
          )}
        >
          ID
        </button>

        <button
          type='button'
          onClick={() => setLanguage('en')}
          aria-label='English'
          title='English'
          className={clsx(
            'relative z-10 w-7 py-0.5 text-center text-xs font-semibold rounded-full transition-colors duration-150 cursor-pointer',
            language === 'en'
              ? 'text-white font-bold'
              : 'text-muted hover:text-ink'
          )}
        >
          EN
        </button>
      </div>
    </div>
  );
}
