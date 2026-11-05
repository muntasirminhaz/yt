#!/usr/bin/env bash
# Usage: scripts/run-ios-device.sh [Debug|Release] [device-name-substring]
# Builds for a connected iPhone or iPad with the team set in the project (automatic signing, device registration
# allowed), installs with devicectl and launches the app. The device must be unlocked and paired with this Mac.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
. "$ROOT/scripts/env.sh"
CONFIG="${1:-Debug}"
WANT="$(printf '%s' "${2:-}" | tr '[:upper:]' '[:lower:]')"
LIST="$ROOT/.atlas/tmp/build/devices.json"
mkdir -p "$(dirname "$LIST")"
xcrun devicectl list devices -j "$LIST" -q >/dev/null 2>&1
UDID="$(jq -r --arg w "$WANT" '[.result.devices[] | select(.connectionProperties.tunnelState=="connected")
  | select((.hardwareProperties.platform // "") | test("iOS|iPadOS"))
  | select((.deviceProperties.name | ascii_downcase) | contains($w))][0].hardwareProperties.udid // empty' "$LIST")"
[ -n "$UDID" ] || { echo "no connected iPhone or iPad${WANT:+ matching '$WANT'}; unlock it, plug it in and trust this Mac (xcrun devicectl list devices)" >&2; exit 1; }
NAME="$(jq -r --arg u "$UDID" '.result.devices[] | select(.hardwareProperties.udid==$u) | .deviceProperties.name' "$LIST")"
echo "Device: $NAME ($UDID)"

SIGN=auto IOS_DESTINATION="platform=iOS,id=$UDID" "$ROOT/scripts/build.sh" ios "$CONFIG"
APP="$ROOT/.atlas/tmp/build/DerivedData/Build/Products/$CONFIG-iphoneos/$PRODUCT_NAME.app"
xcrun devicectl device install app --device "$UDID" "$APP" -q
xcrun devicectl device process launch --device "$UDID" "$APP_BUNDLE_ID" -q
cat <<'EOF2'
Next, on the device (once per install):
  Settings > Apps > Safari > Extensions > the extension > Allow Extension, then allow youtube.com in Safari.
  Personal-team builds expire after 7 days; rerun this script to refresh.
EOF2
