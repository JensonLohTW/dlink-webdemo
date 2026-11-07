#!/usr/bin/env bash
# Build (if needed) and start the demo in Docker, then wait until it responds.
set -euo pipefail
cd "$(dirname "$0")/.."

PORT=5173
URL="http://localhost:${PORT}"

if ! docker info >/dev/null 2>&1; then
  echo "Docker 未运行,请先启动 Docker Desktop。" >&2
  exit 1
fi

docker compose up -d --build

echo "等待服务启动..."
for _ in $(seq 1 60); do
  if curl -fsS -o /dev/null "$URL"; then
    echo "已启动: $URL"
    exit 0
  fi
  sleep 2
done

echo "服务启动超时,查看日志: docker compose logs web" >&2
exit 1
