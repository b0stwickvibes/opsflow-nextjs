#!/bin/bash

# Save Work - Commits and pushes your current branch
# Usage: ./save-work.sh "commit message"

set -e

cd "$(dirname "$0")"

echo "💾 OpsFlow - Save Your Work"
echo "============================"
echo ""

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" == "main" ]; then
    echo "⚠️  WARNING: You're on the main branch!"
    echo ""
    echo "📚 Best practice: Work on feature branches"
    echo "   Run: ./start-feature.sh"
    echo ""
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "🌿 Current branch: $CURRENT_BRANCH"
echo ""

# Check if there are changes
if git diff-index --quiet HEAD --; then
    echo "✅ No changes to save"
    exit 0
fi

# Show what's changed
echo "📝 Changes to save:"
git status --short
echo ""

# Get commit message
if [ -n "$1" ]; then
    MSG="$1"
else
    read -p "Commit message: " MSG
    if [ -z "$MSG" ]; then
        MSG="WIP: $(date '+%Y-%m-%d %H:%M')"
    fi
fi

# Stage all changes
git add -A

# Commit
echo ""
echo "✅ Committing: $MSG"
git commit -m "$MSG"

# Push to current branch
echo ""
echo "🚀 Pushing to origin/$CURRENT_BRANCH..."
git push origin "$CURRENT_BRANCH"

echo ""
echo "✨ Work saved!"
echo ""
echo "💡 To continue working, just keep editing files"
echo "💡 To finish and merge: ./finish-feature.sh"
