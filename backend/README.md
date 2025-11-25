# Seylane VIP Backend

Express + Prisma (SQLite) + ESM.

## Scripts

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Env

See `.env.example`.

## Health

`GET /health` returns `{status:"ok", db:"ok"}`.
