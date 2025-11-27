export function getExplainerBaseUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) {
    throw new Error('NEXT_PUBLIC_API_URL missing');
  }
  return base;
}

export function useMockExplainer(): boolean {
  return false;
}
