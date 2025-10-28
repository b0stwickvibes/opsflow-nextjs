#!/bin/bash

# Quick Git Status Checker
# Shows what files have changed and need to be committed

cd "$(dirname "$0")"

echo "🔍 Git Repository Status"
echo "========================"
echo ""
echo "📍 Current branch:"
git branch --show-current
echo ""
echo "📊 Remote status:"
git fetch origin
git status -sb
echo ""
echo "📝 Changed files:"
git status --short
echo ""
echo "📈 Files changed:"
git diff --stat
echo ""
echo "💾 Last commit:"
git log -1 --oneline
echo ""
echo "🌐 Remote URL:"
git remote get-url origin
