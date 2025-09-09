#!/usr/bin/env bash
set -euo pipefail

# Stop Next.js dev processes scoped to this repository only
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

patterns=(
  "$PROJECT_DIR/node_modules/.bin/next dev"
  "$PROJECT_DIR/.next/postcss.js"
)

to_kill=""
for pat in "${patterns[@]}"; do
  pids=$(pgrep -f "$pat" || true)
  if [ -n "$pids" ]; then
    echo "Found for [$pat]: $pids"
    to_kill+=" $pids"
  fi
done

if [ -n "${to_kill// /}" ]; then
  echo "TERM ->$to_kill"
  kill -TERM $to_kill 2>/dev/null || true
  sleep 1
  remain=""
  for pid in $to_kill; do
    if ps -p "$pid" >/dev/null 2>&1; then
      remain+=" $pid"
    fi
  done
  if [ -n "${remain// /}" ]; then
    echo "KILL ->$remain"
    kill -KILL $remain 2>/dev/null || true
  fi
  echo "Done."
else
  echo "No matching dev processes found for $PROJECT_DIR."
fi

