#!/bin/bash

# OpsFlow Next.js - Git Commit & Push Helper
# Run this from your terminal to commit and push changes

set -e  # Exit on error

cd "$(dirname "$0")"

echo "📊 Checking git status..."
git status

echo ""
echo "📝 Staging all changes..."
git add -A

echo ""
echo "📋 What's being committed:"
git status --short

echo ""
echo "💬 Enter commit message (or press Enter for default):"
read -r commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update: $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "✅ Committing with message: $commit_message"
git commit -m "$commit_message"

echo ""
echo "🚀 Pushing to origin main..."
git push origin main

echo ""
echo "✨ Done! Check your GitHub repo:"
echo "   https://github.com/b0stwickvibes/opsflow-nextjs"
