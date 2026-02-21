# === Backend Build ===
FROM node:22-alpine AS backend-builder
WORKDIR /app/backend

COPY backend/package.json ./
RUN npm install

COPY backend/ ./

# Prisma 6 loads prisma.config.ts which requires DATABASE_URL; use placeholder (doesn't connect)
RUN DATABASE_URL="file:/tmp/dev.db" npx prisma generate
RUN npm run build

# === Frontend Build ===
FROM node:22-alpine AS frontend-builder
WORKDIR /app/passport

COPY passport/package.json ./
RUN npm install

COPY passport/ ./
RUN cp public/index.html ./index.html
RUN npm run build

# === Runtime ===
FROM nginx:alpine AS runtime
WORKDIR /app

# Copy Backend build output
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
COPY --from=backend-builder /app/backend/prisma ./backend/prisma

# Copy Frontend dist (static files)
COPY --from=frontend-builder /app/passport/dist /usr/share/nginx/html

# Copy Nginx config
COPY reverse-proxy/nginx.conf /etc/nginx/nginx.conf

# Install Node for backend runtime
RUN apk add --no-cache nodejs-current npm

EXPOSE 8080

# Backend on 4000; nginx on $PORT (Railway). Substitute PORT into nginx config at startup.
CMD ["sh", "-c", "sed -i \"s/listen 8080/listen ${PORT:-8080}/\" /etc/nginx/nginx.conf && PORT=4000 node /app/backend/dist/server.js & nginx -g 'daemon off;'"]