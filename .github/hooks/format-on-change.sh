#!/usr/bin/env bash

set -euo pipefail

input=$(cat)

tool_name=$(echo "$input" | jq -r '.tool_name // empty')

if echo "$tool_name" | grep -qE '(create|edit|replace)'; then
  npx prettier --write . 2>&1
fi
