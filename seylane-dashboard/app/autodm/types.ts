export interface AutoDmStat {
  label: string;
  value: number;
  target: number;
  delta: number;
}

export interface AutoDmSequence {
  id: string;
  campaign: string;
  audience: string;
  sendRate: number;
  conversion: number;
}

export interface AutoDmSlice {
  stats: AutoDmStat[];
  sequences: AutoDmSequence[];
  loading: boolean;
  hydrate: () => Promise<void>;
}
