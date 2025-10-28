#!/bin/bash

# Start New Feature - Creates a branch for your work
# Usage: ./start-feature.sh "feature-name"

set -e

cd "$(dirname "$0")"

echo "🌿 OpsFlow - Start New Feature"
echo "==============================="
echo ""

# Get feature name
if [ -n "$1" ]; then
    FEATURE_NAME="$1"
else
    echo "📝 What are you working on?"
    echo "   Examples: navbar-redesign, add-pricing-page, fix-mobile-menu"
    echo ""
    read -p "Feature name: " FEATURE_NAME
fi

# Clean up the name (replace spaces with dashes, lowercase)
BRANCH_NAME=$(echo "$FEATURE_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Determine branch type
if [[ $BRANCH_NAME == fix/* ]] || [[ $BRANCH_NAME == hotfix/* ]]; then
    FULL_BRANCH="$BRANCH_NAME"
else
    FULL_BRANCH="feature/$BRANCH_NAME"
fi

echo ""
echo "🔍 Checking current status..."

# Make sure we're on main and up to date
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Currently on branch: $CURRENT_BRANCH"
    read -p "Switch to main first? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git checkout main
    fi
fi

# Pull latest changes
echo "📥 Pulling latest changes from main..."
git pull origin main

# Create and switch to new branch
echo ""
echo "🌱 Creating branch: $FULL_BRANCH"
git checkout -b "$FULL_BRANCH"

echo ""
echo "✅ Ready to work!"
echo ""
echo "📝 You're now on branch: $FULL_BRANCH"
echo ""
echo "💡 Next steps:"
echo "   1. Make your changes"
echo "   2. Run: ./save-work.sh"
echo "   3. When done: ./finish-feature.sh"
