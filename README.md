# Seylane VIP Monorepo

This monorepo contains the backend API and the VIP Passport mini app.

- `backend/`: Express + Prisma + ESM server (NodeNext)
- `passport/`: Vite + React mini app (RTL Persian)
- `reverse-proxy/`: Nginx config to serve the passport and proxy API

## Quick start

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

```bash
cd passport
npm install
npm run dev
```

See each package README for details.
