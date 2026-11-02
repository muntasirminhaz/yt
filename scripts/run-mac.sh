#!/usr/bin/env bash
# Usage: scripts/run-mac.sh [Debug|Release]
# Builds the macOS app (ad-hoc signed so entitlements apply), launches it once so Safari registers the
# extension, then prints the registration state and the manual Safari steps.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
. "$ROOT/scripts/env.sh"
CONFIG="${1:-Debug}"
SIGN="${SIGN:-adhoc}" "$ROOT/scripts/build.sh" macos "$CONFIG"

APP="$ROOT/.atlas/tmp/build/DerivedData/Build/Products/$CONFIG/$PRODUCT_NAME.app"
[ -d "$APP" ] || { echo "app not found at ${APP#"$ROOT"/}" >&2; exit 1; }
open "$APP"
sleep 2
echo "Safari web extension registration for $EXT_BUNDLE_ID:"
pluginkit -mAvvv -i "$EXT_BUNDLE_ID" 2>/dev/null | grep -E 'Path|Display Name' | sed 's/^/  /' \
  || echo "  (not registered yet; give Safari a moment, then: pluginkit -mAvvv -i $EXT_BUNDLE_ID)"
cat <<'EOF'
Next, in Safari:
  1. Settings > Advanced > tick "Show features for web developers" (one time).
  2. Settings > Developer > tick "Allow unsigned extensions" (resets every time Safari quits).
  3. Settings > Extensions > tick the extension, then allow it on youtube.com when the toolbar icon asks.
  4. Open https://www.youtube.com; Develop > Show Web Inspector for the page, or Develop > Web Extension Background Content.
EOF
