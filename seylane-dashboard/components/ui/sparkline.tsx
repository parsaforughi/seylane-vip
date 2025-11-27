'use client';

import { m } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SparklineProps {
  points: number[];
  className?: string;
}

export function Sparkline({ points, className }: SparklineProps) {
  if (!points.length) return null;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const normalized = points.map((point, index) => {
    const x = (index / (points.length - 1 || 1)) * 200;
    const y = max === min ? 50 : 50 - ((point - min) / (max - min)) * 50;
    return `${x},${y}`;
  });

  return (
    <m.svg
      viewBox="0 0 200 50"
      className={cn('h-12 w-full text-cyan-300', className)}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={normalized.join(' ')}
        className="drop-shadow-[0_0_10px_rgba(34,211,238,0.65)]"
      />
    </m.svg>
  );
}
