# Seylane VIP Monorepo

Backend API + VIP Passport client + reverse proxy.

- `backend/`: Express + Prisma (CommonJS, TypeScript)
- `passport/`: Vite + React (RTL Persian UI)
- `reverse-proxy/`: Nginx config for Docker runtime

## Backend

```bash
cd /Users/macbookair/Desktop/seylane-vip/backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

The seed creates the demo VIP user (`telegramId = 999999999`) plus dashboard data that the demo-login button consumes.

## Passport

```bash
cd /Users/macbookair/Desktop/seylane-vip/passport
npm install
npm run dev
```

Use the **ورود تست** button to enter the dashboard with the seeded data.

## Docker

```bash
cd /Users/macbookair/Desktop/seylane-vip
docker build -t seylane-vip .
docker compose up
```

The container exposes port `8081` (Nginx) and proxies `/api` to the backend at `:4000`.
