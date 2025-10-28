#!/bin/bash

# Quick Branch Status - Shows what you're working on
# Usage: ./branch-status.sh

cd "$(dirname "$0")"

echo "🌿 OpsFlow Branch Status"
echo "========================"
echo ""

CURRENT_BRANCH=$(git branch --show-current)

echo "📍 Current Branch: $CURRENT_BRANCH"
echo ""

if [ "$CURRENT_BRANCH" == "main" ]; then
    echo "ℹ️  You're on the main branch"
    echo ""
    echo "💡 To start working on a feature:"
    echo "   ./start-feature.sh"
else
    echo "✅ You're working on a feature branch"
    echo ""
    echo "💾 To save your work:"
    echo "   ./save-work.sh"
    echo ""
    echo "🎉 To finish and merge:"
    echo "   ./finish-feature.sh"
fi

echo ""
echo "📊 Recent commits on this branch:"
git log --oneline -5

echo ""
echo "📝 Uncommitted changes:"
if git diff-index --quiet HEAD --; then
    echo "   ✅ None"
else
    git status --short
fi

echo ""
echo "🌐 All branches:"
git branch -a | grep -v "remotes/origin/HEAD"
