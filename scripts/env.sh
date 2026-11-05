#!/usr/bin/env bash
# Single source of the names every script uses. Change these once when the product is renamed;
# .atlas/runbooks/rename-checklist.md lists the other files that must change with them.
export DEVELOPER_DIR="${DEVELOPER_DIR:-/Applications/Xcode.app/Contents/Developer}"
PROJECT_FILE="Commander.xcodeproj"
PRODUCT_NAME="Commander"
APP_BUNDLE_ID="com.cyberm3.commander"
EXT_BUNDLE_ID="com.cyberm3.commander.Extension"
SCHEME_MAC="Commander (macOS)"
SCHEME_IOS="Commander (iOS)"
DEVICE_HUB_APP="/Applications/Xcode.app/Contents/Applications/DeviceHub.app"
