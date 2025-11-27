import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/dashboard/providers';
import { StarkBackground } from '@/components/dashboard/stark-background';
import { LanguageProvider } from '@/components/providers/language-provider';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-geist-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Mastermind OS',
  description: 'Mastermind OS control center for Explainer, AutoDM, and Iceball modules.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} bg-[#01030b] text-white antialiased`}>
        <StarkBackground />
        <LanguageProvider>
          <Providers>
            <div className="relative z-10 min-h-screen">
              {children}
            </div>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
