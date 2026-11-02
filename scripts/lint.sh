#!/usr/bin/env bash
# Usage: scripts/lint.sh [--fix]
# ESLint over the extension and tests; swift-format (ships with Xcode) over the Swift sources.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export DEVELOPER_DIR="${DEVELOPER_DIR:-/Applications/Xcode.app/Contents/Developer}"
FIX="${1:-}"
status=0

if [ -d "$ROOT/node_modules/.bin" ]; then
  if [ "$FIX" = "--fix" ]; then
    (cd "$ROOT" && npx eslint --fix extension tests) && echo "ESLINT OK" || status=1
  else
    (cd "$ROOT" && npx eslint extension tests) && echo "ESLINT OK" || status=1
  fi
else
  echo "ESLINT: node_modules missing, run npm install (skipped)"
fi

SWIFT_DIRS=("$ROOT/Shared (App)" "$ROOT/Shared (Extension)" "$ROOT/iOS (App)" "$ROOT/macOS (App)")
if [ "$FIX" = "--fix" ]; then
  xcrun swift-format format --in-place --recursive "${SWIFT_DIRS[@]}" && echo "SWIFT-FORMAT APPLIED" || status=1
else
  xcrun swift-format lint --strict --recursive "${SWIFT_DIRS[@]}" && echo "SWIFT-FORMAT OK" || status=1
fi
exit $status
