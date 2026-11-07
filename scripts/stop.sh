#!/usr/bin/env bash
# Stop and remove the demo container.
set -euo pipefail
cd "$(dirname "$0")/.."

docker compose down
echo "已停止。"
