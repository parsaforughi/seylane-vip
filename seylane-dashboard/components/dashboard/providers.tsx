'use client';

import { Suspense } from 'react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </Suspense>
    </LazyMotion>
  );
}
