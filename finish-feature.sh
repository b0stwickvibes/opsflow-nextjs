#!/bin/bash

# Finish Feature - Merges your branch back to main
# Usage: ./finish-feature.sh

set -e

cd "$(dirname "$0")"

echo "🎉 OpsFlow - Finish Feature"
echo "============================"
echo ""

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" == "main" ]; then
    echo "ℹ️  You're already on main branch"
    exit 0
fi

echo "🌿 Current branch: $CURRENT_BRANCH"
echo ""

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes!"
    echo ""
    read -p "Save them first? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        ./save-work.sh
    else
        echo "❌ Please commit or stash your changes first"
        exit 1
    fi
fi

echo "📋 What would you like to do?"
echo "  1) Merge to main and push"
echo "  2) Create Pull Request on GitHub (opens browser)"
echo "  3) Just switch to main (keep branch for later)"
echo "  4) Cancel"
echo ""
read -p "Choose (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🔄 Switching to main..."
        git checkout main
        
        echo "📥 Pulling latest changes..."
        git pull origin main
        
        echo "🔀 Merging $CURRENT_BRANCH into main..."
        git merge "$CURRENT_BRANCH"
        
        echo "🚀 Pushing to GitHub..."
        git push origin main
        
        echo ""
        read -p "Delete branch $CURRENT_BRANCH? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git branch -d "$CURRENT_BRANCH"
            git push origin --delete "$CURRENT_BRANCH" 2>/dev/null || true
            echo "🗑️  Branch deleted"
        fi
        
        echo ""
        echo "✨ Feature merged to main!"
        echo "🌐 View: https://github.com/b0stwickvibes/opsflow-nextjs"
        ;;
    2)
        echo ""
        echo "📤 Pushing branch to GitHub..."
        git push origin "$CURRENT_BRANCH"
        
        echo ""
        echo "🌐 Opening GitHub to create Pull Request..."
        open "https://github.com/b0stwickvibes/opsflow-nextjs/compare/main...$CURRENT_BRANCH"
        
        echo ""
        echo "💡 Create the PR in your browser, then come back and:"
        echo "   - Switch to main: git checkout main"
        echo "   - Delete branch: git branch -d $CURRENT_BRANCH"
        ;;
    3)
        echo ""
        echo "🔄 Switching to main..."
        git checkout main
        echo "✅ Branch $CURRENT_BRANCH preserved for later"
        ;;
    4)
        echo "👋 Cancelled"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac
