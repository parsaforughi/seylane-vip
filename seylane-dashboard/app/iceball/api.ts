import { apiFetch } from '@/lib/api/client';
import type { IceballAlert, IceballNode } from './types';

export const iceballApi = {
  stats: () => apiFetch<{ nodes: IceballNode[]; alerts: IceballAlert[] }>('/api/mock/iceball/stats'),
};
