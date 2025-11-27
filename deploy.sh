#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$REPO_DIR"

echo "[deploy] Building Docker image seylane-vip..."
docker build -t seylane-vip .

if docker ps -a --format '{{.Names}}' | grep -Eq '^seylane-vip-app$'; then
  echo "[deploy] Stopping existing container seylane-vip-app..."
  docker stop seylane-vip-app >/dev/null
  echo "[deploy] Removing existing container seylane-vip-app..."
  docker rm seylane-vip-app >/dev/null
fi

echo "[deploy] Starting new container seylane-vip-app..."
docker run -d \
  --name seylane-vip-app \
  -p 8081:8081 \
  seylane-vip

echo "[deploy] Deployment complete."
echo "Run:"
echo "  chmod +x deploy.sh"
echo "  ./deploy.sh"
