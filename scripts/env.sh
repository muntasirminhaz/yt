#!/usr/bin/env bash
# Single source of the names every script uses. Change these once when the product is renamed;
# .atlas/runbooks/rename-checklist.md lists the other files that must change with them.
export DEVELOPER_DIR="${DEVELOPER_DIR:-/Applications/Xcode.app/Contents/Developer}"
PROJECT_FILE="yt.xcodeproj"
PRODUCT_NAME="yt"
APP_BUNDLE_ID="cyberm3.yt"
EXT_BUNDLE_ID="cyberm3.yt.Extension"
SCHEME_MAC="yt (macOS)"
SCHEME_IOS="yt (iOS)"
DEVICE_HUB_APP="/Applications/Xcode.app/Contents/Applications/DeviceHub.app"
