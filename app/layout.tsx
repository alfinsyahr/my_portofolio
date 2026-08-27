import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alfin Syahrin — Full Stack Developer & AI Enthusiast',
  description:
    'Portfolio Alfin Syahrin, Full Stack Developer & AI Enthusiast. Membangun website modern, AI application, dan IoT project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='font-body bg-bg text-ink antialiased'>{children}</body>
    </html>
  );
}
