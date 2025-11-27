import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/dashboard/providers';
import { StarkBackground } from '@/components/dashboard/stark-background';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-geist-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Seylane Dashboard',
  description: 'A StarkOS inspired control center for explainer, autodm, and iceball modules.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} bg-[#01030b] text-white antialiased`}>
        <StarkBackground />
        <Providers>
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
