#!/bin/bash

# OpsFlow Git Management - Complete Helper
# Checks status, commits, and pushes in one go

set -e

cd "$(dirname "$0")"

echo "🚀 OpsFlow Git Manager"
echo "======================="
echo ""

# Check current branch
BRANCH=$(git branch --show-current)
echo "📍 Branch: $BRANCH"
echo ""

# Fetch latest from remote
echo "🔄 Fetching from remote..."
git fetch origin
echo ""

# Check if we're behind
BEHIND=$(git rev-list --count HEAD..origin/$BRANCH 2>/dev/null || echo "0")
AHEAD=$(git rev-list --count origin/$BRANCH..HEAD 2>/dev/null || echo "0")

if [ "$BEHIND" != "0" ]; then
    echo "⚠️  WARNING: Your local branch is $BEHIND commit(s) behind origin!"
    echo "   Run: git pull origin $BRANCH"
    echo ""
fi

if [ "$AHEAD" != "0" ]; then
    echo "📤 Your local branch is $AHEAD commit(s) ahead of origin"
    echo ""
fi

# Show status
echo "📊 Current changes:"
if git diff-index --quiet HEAD --; then
    echo "✅ No uncommitted changes"
    if [ "$AHEAD" == "0" ]; then
        echo "✨ Everything is up to date!"
        exit 0
    fi
else
    git status --short
    echo ""
    
    # Prompt for action
    echo "What would you like to do?"
    echo "  1) View detailed changes"
    echo "  2) Commit all changes"
    echo "  3) Commit and push"
    echo "  4) Exit"
    echo ""
    read -p "Choose (1-4): " choice
    
    case $choice in
        1)
            echo ""
            echo "📝 Detailed changes:"
            git diff --stat
            echo ""
            git status
            ;;
        2)
            echo ""
            read -p "Commit message: " msg
            if [ -z "$msg" ]; then
                msg="Update: $(date '+%Y-%m-%d %H:%M')"
            fi
            git add -A
            git commit -m "$msg"
            echo "✅ Committed!"
            ;;
        3)
            echo ""
            read -p "Commit message: " msg
            if [ -z "$msg" ]; then
                msg="Update: $(date '+%Y-%m-%d %H:%M')"
            fi
            git add -A
            git commit -m "$msg"
            echo "✅ Committed!"
            echo ""
            echo "🚀 Pushing to origin/$BRANCH..."
            git push origin $BRANCH
            echo ""
            echo "✨ Done! View at: https://github.com/b0stwickvibes/opsflow-nextjs"
            ;;
        4)
            echo "👋 Exiting..."
            exit 0
            ;;
        *)
            echo "❌ Invalid choice"
            exit 1
            ;;
    esac
fi
