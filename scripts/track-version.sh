#!/usr/bin/env bash
VERSION=$(yarn info . version --silent)
UPSTREAM=$(yarn info tailwindcss version --silent)

if [[ "$VERSION" == "$UPSTREAM" ]]; then
    exit
fi

yarn version --new-version "$UPSTREAM"
