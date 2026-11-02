#!/usr/bin/env bash
# Usage: scripts/test.sh [js|swift|all] [-- extra args passed to the runner]
# JavaScript tests run with node:test; Swift tests run through xcodebuild once a test target exists.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
. "$ROOT/scripts/env.sh"
WHAT="${1:-all}"
case "$WHAT" in js|swift|all) ;; *) echo "usage: $0 [js|swift|all] [-- runner args]" >&2; exit 2 ;; esac
shift || true
[ "${1:-}" = "--" ] && shift
LOGDIR="$ROOT/.atlas/tmp/build"
mkdir -p "$LOGDIR"
status=0

if [ "$WHAT" = "js" ] || [ "$WHAT" = "all" ]; then
  if [ -d "$ROOT/tests" ]; then
    (cd "$ROOT" && node --test "$@" 'tests/**/*.test.js') && echo "JS TESTS OK" || { echo "JS TESTS FAILED"; status=1; }
  else
    echo "JS TESTS: no tests/ folder"; status=1
  fi
fi

if [ "$WHAT" = "swift" ] || [ "$WHAT" = "all" ]; then
  if ! LIST="$(xcodebuild -list -project "$ROOT/$PROJECT_FILE" 2>&1)"; then
    echo "SWIFT TESTS: xcodebuild unavailable: $(printf '%s' "$LIST" | head -1)"; status=1
  elif printf '%s' "$LIST" | grep -q 'Tests'; then
    LOG="$LOGDIR/test-macos.log"
    if xcodebuild test -project "$ROOT/$PROJECT_FILE" -scheme "$SCHEME_MAC" -destination 'platform=macOS,arch=arm64' \
         -derivedDataPath "$LOGDIR/DerivedData" CODE_SIGNING_ALLOWED=NO -quiet "$@" >"$LOG" 2>&1; then
      echo "SWIFT TESTS OK (log: ${LOG#"$ROOT"/})"
    else
      echo "SWIFT TESTS FAILED (log: ${LOG#"$ROOT"/})"; grep -E 'error:|failed' "$LOG" | sort -u | head -20; status=1
    fi
  else
    echo "SWIFT TESTS: no test target yet (skipped)"
  fi
fi
exit $status
