#!/usr/bin/env bash
# Usage: scripts/run-ios-sim.sh [Debug|Release] [device-name-substring]
# Uses a booted simulator whose name contains the substring (default "iPhone"), otherwise the newest standard
# iOS runtime's matching device. Builds for it, installs and launches the app, opens the device window, and
# opens m.youtube.com in the simulator's Safari.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
. "$ROOT/scripts/env.sh"
CONFIG="${1:-Debug}"
WANT="$(printf '%s' "${2:-iPhone}" | tr '[:upper:]' '[:lower:]')"

UDID="$(xcrun simctl list devices booted -j | jq -r --arg w "$WANT" \
  '[.devices[][] | select(.name | ascii_downcase | contains($w))][0].udid // empty')"
if [ -z "$UDID" ]; then
  UDID="$(xcrun simctl list devices available -j | jq -r --arg w "$WANT" '
    .devices | to_entries
    | map(select(.key | test("SimRuntime\\.iOS-[0-9]+-[0-9]+$")))
    | sort_by(.key | capture("iOS-(?<a>[0-9]+)-(?<b>[0-9]+)") | [(.a|tonumber), (.b|tonumber)]) | reverse
    | map(.value[] | select(.isAvailable) | select(.name | ascii_downcase | contains($w))) | .[0].udid // empty')"
fi
[ -n "$UDID" ] || { echo "no simulator whose name contains '$WANT'; see: xcrun simctl list devices available" >&2; exit 1; }
NAME="$(xcrun simctl list devices -j | jq -r --arg u "$UDID" '.devices[][] | select(.udid==$u) | .name')"
echo "Simulator: $NAME ($UDID)"

xcrun simctl boot "$UDID" 2>/dev/null || true
xcrun simctl bootstatus "$UDID" -b >/dev/null
IOS_DESTINATION="platform=iOS Simulator,id=$UDID" "$ROOT/scripts/build.sh" ios "$CONFIG"

APP="$ROOT/.atlas/tmp/build/DerivedData/Build/Products/$CONFIG-iphonesimulator/$PRODUCT_NAME.app"
xcrun simctl install "$UDID" "$APP"
xcrun simctl launch "$UDID" "$APP_BUNDLE_ID" >/dev/null
if [ -d "$DEVICE_HUB_APP" ]; then open -a "$DEVICE_HUB_APP"; else echo "(device window app not found at $DEVICE_HUB_APP; the simulator still runs headless)"; fi
xcrun simctl openurl "$UDID" "https://m.youtube.com" || true
cat <<'EOF'
Next, in the simulator (once per install):
  Settings > Apps > Safari > Extensions > the extension > Allow Extension, then allow youtube.com in Safari.
  If the site prompt does not appear, use Safari's page menu (aA or puzzle icon) > Manage Extensions.
  Inspect from Mac Safari: Develop > [simulator name] > the page, "Extension Background Page" or "Extension Popup Page".
EOF
