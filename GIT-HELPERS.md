# Git Helper Scripts

Quick scripts to manage your OpsFlow Next.js git workflow.

## Setup (One Time)

Make the scripts executable:

```bash
chmod +x git-*.sh
```

## Scripts

### 1. `git-manager.sh` - **RECOMMENDED**
Interactive git manager that does everything:
```bash
./git-manager.sh
```

**Features:**
- Shows current branch and status
- Checks if you're behind/ahead of remote
- Interactive menu to view changes, commit, or push
- Automatic commit message with timestamp

### 2. `git-status.sh`
Quick status checker:
```bash
./git-status.sh
```

Shows:
- Current branch
- Remote status
- Changed files
- Last commit
- Remote URL

### 3. `git-commit-push.sh`
Quick commit & push:
```bash
./git-commit-push.sh
```

Stages all changes, prompts for message, commits, and pushes.

## Quick Workflow

**Option A - Full Interactive (Recommended):**
```bash
./git-manager.sh
```
Then choose option 3 (Commit and push)

**Option B - Quick Status:**
```bash
./git-status.sh
```

**Option C - Fast Commit:**
```bash
./git-commit-push.sh
```

## Manual Git Commands

If you prefer manual control:

```bash
# See what changed
git status

# Stage all changes
git add -A

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest from GitHub
git pull origin main
```

## Repository

Your repo: https://github.com/b0stwickvibes/opsflow-nextjs

## Troubleshooting

**Changes not showing on GitHub?**
1. Run `./git-status.sh` to see if you have uncommitted changes
2. Run `./git-manager.sh` and choose option 3
3. Check the GitHub URL above

**"Behind origin" warning?**
```bash
git pull origin main
```

**Merge conflicts?**
```bash
git status  # Shows conflicted files
# Edit files to resolve conflicts
git add -A
git commit -m "Resolved merge conflicts"
git push origin main
```
