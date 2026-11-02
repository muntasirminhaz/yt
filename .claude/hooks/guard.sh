#!/usr/bin/env bash
# PreToolUse guard for Bash. Exit 2 blocks the call; stderr is the reason shown to Claude.
# Blocks recursive deletes that reach outside the repo (absolute, home, $HOME, parent paths)
# and piping downloads into a shell. The session scratchpad under /private/tmp/claude-<uid>/
# counts as inside the repo.
set -euo pipefail
input="$(cat)"
cmd="$(printf '%s' "$input" | jq -r '.tool_input.command // empty' 2>/dev/null || true)"
[ -z "$cmd" ] && exit 0
scratch="$(printf '%s' "$input" | jq -r '.scratchpad_dir // empty' 2>/dev/null || true)"
[ -n "$scratch" ] && cmd="${cmd//"$scratch"/SCRATCH}"
cmd="${cmd//\/private\/tmp\/claude-$(id -u)/SCRATCH}"

if printf '%s' "$cmd" | grep -Eq '\|[[:space:]]*(sudo[[:space:]]+)?(ba|z)?sh([[:space:]]|$)'; then
  echo "guard: piping into a shell is blocked; download to .atlas/tmp/ first and inspect it" >&2
  exit 2
fi

if printf '%s' "$cmd" | grep -Eq '(^|[;&|(][[:space:]]*|[[:space:]])rm([[:space:]]+-[a-zA-Z-]+)*[[:space:]]+(-[a-zA-Z]*[rR][a-zA-Z]*|--recursive)'; then
  if printf '%s' "$cmd" | grep -Eq '(^|[;&|(][[:space:]]*|[[:space:]])rm[[:space:]][^;&|]*[[:space:]]["'"'"']?(/|~|\$\{?HOME|\.\./|\.\.["'"'"']?([[:space:]]|$))'; then
    echo "guard: recursive delete outside the repo is blocked; use a repo-relative path inside .atlas/tmp/ or ask the user" >&2
    exit 2
  fi
fi
exit 0
