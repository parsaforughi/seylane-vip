const BASE = process.env.NEXT_PUBLIC_API_URL;
if (!BASE) throw new Error('NEXT_PUBLIC_API_URL missing');

export async function apiFetch<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const res = await fetch(`${BASE}${normalizedPath}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}
