'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ' +
        (scrolled
          ? 'bg-white/75 backdrop-blur-md border-b border-border shadow-xs'
          : 'bg-transparent border-b border-transparent')
      }
    >
      <nav className="section-container flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-heading font-extrabold text-xl tracking-tight text-ink hover:opacity-80 transition"
        >
          Alfin<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 translate-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-ink transition duration-300 ease-smooth"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions: Language Switcher + Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />

          <Button
            href={t.cv.resumeUrl}
            download={t.cv.resumeFileName}
            variant="secondary"
            className="px-4 py-2 text-xs font-semibold tracking-wide"
          >
            <Download size={14} className="text-accent" />
            {t.nav.resume}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ink rounded-lg hover:bg-black/5 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-border shadow-lg"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted hover:text-ink transition duration-300 ease-smooth py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex items-center gap-3">
                <Button
                  href={t.cv.resumeUrl}
                  download={t.cv.resumeFileName}
                  variant="secondary"
                  className="w-full sm:w-fit px-5 py-2.5 text-sm font-semibold justify-center"
                >
                  <Download size={15} className="text-accent" />
                  {t.nav.resume}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
