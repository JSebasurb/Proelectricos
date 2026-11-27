#!/usr/bin/env bash
# Uso: ./tools/set-url.sh https://TU-USUARIO.github.io/NOMBRE-REPO/
# Reemplaza la URL de ejemplo en index.html, robots.txt y sitemap.xml.
set -e
NEW="${1:?Indica la URL final con / al final}"
case "$NEW" in */) ;; *) NEW="$NEW/";; esac
OLD="https://TU-USUARIO.github.io/proelectricos-popayan/"
cd "$(dirname "$0")/.."
for f in index.html robots.txt sitemap.xml; do
  OLD="$OLD" NEW="$NEW" perl -pi -e 's/\Q$ENV{OLD}\E/$ENV{NEW}/g' "$f"
done
echo "URL actualizada a $NEW"
