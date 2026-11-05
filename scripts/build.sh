#!/usr/bin/env bash
# Usage: [SIGN=none|adhoc|auto] [IOS_DESTINATION=<xcodebuild destination>] scripts/build.sh macos|ios [Debug|Release]
# Builds headlessly, writes the full log to .atlas/tmp/build/, prints only the result and errors.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
. "$ROOT/scripts/env.sh"
PLATFORM="${1:-macos}"
CONFIG="${2:-Debug}"
SIGN="${SIGN:-none}"
[ $# -le 2 ] || { echo "unexpected argument: $3 (SIGN and IOS_DESTINATION are environment variables, not arguments)" >&2; exit 2; }
PROJECT="$ROOT/$PROJECT_FILE"
LOGDIR="$ROOT/.atlas/tmp/build"
mkdir -p "$LOGDIR"

case "$PLATFORM" in
  macos) SCHEME="$SCHEME_MAC"; DEST="platform=macOS,arch=arm64" ;;
  ios)   SCHEME="$SCHEME_IOS"; DEST="${IOS_DESTINATION:-generic/platform=iOS Simulator}" ;;
  *) echo "usage: [SIGN=none|adhoc|auto] $0 macos|ios [Debug|Release]" >&2; exit 2 ;;
esac

case "$SIGN" in
  none)  SIGN_ARGS=(CODE_SIGNING_ALLOWED=NO) ;;
  adhoc) SIGN_ARGS=(CODE_SIGN_STYLE=Manual "CODE_SIGN_IDENTITY=-" DEVELOPMENT_TEAM= PROVISIONING_PROFILE_SPECIFIER=) ;;
  auto)  SIGN_ARGS=(CODE_SIGN_STYLE=Automatic -allowProvisioningUpdates -allowProvisioningDeviceRegistration) ;;
  *) echo "SIGN must be none, adhoc or auto (auto = the team in the project, device registration allowed)" >&2; exit 2 ;;
esac

LOG="$LOGDIR/build-$PLATFORM-$CONFIG.log"
if xcodebuild -project "$PROJECT" -scheme "$SCHEME" -configuration "$CONFIG" -destination "$DEST" \
     -derivedDataPath "$LOGDIR/DerivedData" "${SIGN_ARGS[@]}" -quiet build >"$LOG" 2>&1; then
  echo "BUILD OK: $PLATFORM $CONFIG sign=$SIGN (log: ${LOG#"$ROOT"/})"
else
  echo "BUILD FAILED: $PLATFORM $CONFIG sign=$SIGN (log: ${LOG#"$ROOT"/})"
  grep -E 'error:' "$LOG" | sort -u | head -20
  exit 1
fi
