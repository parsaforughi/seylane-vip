# Seylane VIP Backend

Express + Prisma (SQLite) + CommonJS.

## Scripts

```bash
cd /Users/macbookair/Desktop/seylane-vip/backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

## Env

See `.env.example`.

## Health

`GET /health` returns `{status:"ok", db:"ok"}`.
