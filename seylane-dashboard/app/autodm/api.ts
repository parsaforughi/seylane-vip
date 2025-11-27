import { apiFetch } from '@/lib/api/client';
import type { AutoDmSequence, AutoDmStat } from './types';

export const autoDmApi = {
  stats: () => apiFetch<{ stats: AutoDmStat[]; sequences: AutoDmSequence[] }>('/api/mock/autodm/stats'),
};
