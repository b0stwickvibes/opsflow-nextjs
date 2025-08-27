set -euo pipefail
echo "=== Type check ==="
pnpm tsc --noEmit || true

echo; echo "=== Next build (to surface missing modules/routes) ==="
pnpm next build || true

echo; echo "=== Legacy import paths left over ==="
git grep -nE '@/components/site/|@/components/sections/(heroes|features)/' || true

echo; echo "=== All '@/lib/*' imports used (so we can stub any missing) ==="
git grep -hR "from '@/lib/" app components | sed -E "s/.*from '([^']+)'.*/\1/" | sort -u

echo; echo "=== <Link> hrefs (quick route sanity check) ==="
git grep -n "<Link " app components | sed -E 's/.*<Link ([^>]+)>.*/\1/' | sort -u || true
