export interface IceballNode {
  id: string;
  name: string;
  status: 'stable' | 'charging' | 'cooldown';
  temperature: number;
  charge: number;
}

export interface IceballAlert {
  id: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export interface IceballSlice {
  nodes: IceballNode[];
  alerts: IceballAlert[];
  loading: boolean;
  hydrate: () => Promise<void>;
}
