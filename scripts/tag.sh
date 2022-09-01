#!/usr/bin/env bash

set -ex

VERSION=$(jq -r ".version" package.json)
git tag ${VERSION} || true

git push --tags || true
