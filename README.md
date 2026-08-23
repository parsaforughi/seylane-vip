<p align="center">
  <img src="docs/og.png" alt="VIP Passport — Coming soon" width="100%" />
</p>

<h1 align="center">VIP Passport</h1>

<p align="center">Telegram Mini App · Vite + React · RTL</p>

<p align="center">
  <em>VIP Passport — Telegram Mini App. Loyalty club: stamps, missions, purchase and display proofs, referrals.</em>
</p>

<p align="center">
  <code>vip-passport</code>
  <code>telegram-mini-app</code>
  <code>react</code>
  <code>vite</code>
  <code>javascript</code>
  <code>loyalty</code>
  <code>rtl</code>
</p>

<p align="center">
  <a href="#client">Client</a> ·
  <a href="#auth">Auth</a> ·
  <a href="#api-the-client-calls">API</a> ·
  <a href="#repo">Repo</a> ·
  <a href="#run">Run</a>
</p>

---

The JS client for a loyalty club. Members open it inside Telegram. The shell is a navy glass passport: points, stamps, missions, invoice proofs, shelf displays, VIP referrals.

This repository is the VIP stack. The site itself is `passport/`.

## Client

`passport/` — Vite 5, React 18, axios, zustand, react-router. RTL UI. Palette from the live CSS: navy `#020712` / `#050b1f`, neon `#00ffa8`, gold `#e8c97a`.

| Route | What it does |
| --- | --- |
| `/login` | Telegram `initData` auto-login, or demo login / VIP demo login |
| `/dashboard` | Greeting, city, manager, points, stamps, active / pending counts |
| `/missions` | Mission cards; `PURCHASE` / `DISPLAY` / `REFERRAL` jump to the form |
| `/stamps` | Stamp total and the “next reward” ring (every 10) |
| `/profile` | Store, manager, phone, city, Telegram username, VIP flag, QR |
| `/purchase` | Invoice image + amount + date |
| `/display` | Shelf image + brand + location |
| `/referral` | Introduce a store (name, manager, phone, city) |
| `/admin` | Review users, missions, purchases, displays, referrals |

`VITE_COMING_SOON=true` replaces the router with the coming-soon still (`ComingSoon`). Anything else redirects to `/dashboard` when a token exists, otherwise `/login`. `CompleteProfile` is in the tree and is not routed.

Bottom nav: Dashboard · Missions · Stamps · Profile.

## Auth

1. `main.jsx` calls `Telegram.WebApp.ready()` and `expand()`, then reads `initData`.
2. Login posts that payload to `POST /api/auth/telegram-login`.
3. JWT is stored as `vip_passport_token` (and `auth`).
4. Axios sends `Authorization: Bearer`.
5. Demo path: `POST /api/auth/demo-login` for the seeded user `telegramId = 999999999`, or local `setDemoAuth`.

`RequireAuth` sends a missing token back to `/login`.

## API the client calls

| Method | Path |
| --- | --- |
| `POST` | `/api/auth/telegram-login` · `/api/auth/demo-login` · `/api/auth/telegram` |
| `GET` | `/api/user/me` · `/api/dashboard` · `/api/missions` · `/api/qr/:userId` |
| `POST` | `/api/purchase` · `/api/display` · `/api/referral` · `/api/upload` |
| `GET` / `POST` | `/api/admin/…` |

Base URL is `http://localhost:10000/api`, or the Render `/api` origin when the page host contains `onrender.com`.

## Repo

| Path | Role |
| --- | --- |
| `passport/` | VIP client — this site |
| `backend/` | Express + Prisma (SQLite). `GET /health` |
| `reverse-proxy/` | Nginx for the Docker image |
| dashboard package | Separate Next.js control center (explainer / autodm / iceball). Not the passport UI. |

## Run

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

```bash
cd passport
npm install
npm run dev
```

The seed creates the demo VIP (`telegramId = 999999999`). Use the demo login button on the login book.

```bash
docker build .
docker compose up
```

Compose publishes `8081` and proxies `/api` to the backend on `:4000`.
