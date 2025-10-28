# Safe Git Workflow Guide

## 🎯 The Problem You're Solving

**Without branches:** Work directly on main → easy to lose work, hard to experiment, risky merges

**With branches:** Each feature gets its own branch → safe experimentation, easy rollback, clean history

---

## 🚀 Your New Workflow (3 Simple Steps)

### **Step 1: Start New Work**
```bash
./start-feature.sh navbar-redesign
```

What this does:
- Creates a new branch (e.g., `feature/navbar-redesign`)
- Switches to that branch
- Pulls latest changes from main first

### **Step 2: Save Your Work (As Often As You Want)**
```bash
./save-work.sh "Updated navbar logo"
```

What this does:
- Commits all your changes
- Pushes to your feature branch (NOT main)
- Safe to run multiple times

### **Step 3: Finish Feature**
```bash
./finish-feature.sh
```

What this does:
- Merges your branch into main
- Pushes to GitHub
- Optionally deletes your feature branch

---

## 📋 Quick Reference Commands

| What You Want | Command | What It Does |
|---------------|---------|--------------|
| **Start new feature** | `./start-feature.sh` | Creates feature branch |
| **Save progress** | `./save-work.sh` | Commits & pushes current work |
| **Finish feature** | `./finish-feature.sh` | Merges to main |
| **Check status** | `./branch-status.sh` | Shows current branch & changes |

---

## 💡 Real-World Examples

### **Example 1: Working on Homepage Hero**

```bash
# Start
./start-feature.sh homepage-hero

# Make changes to files...
# (edit homepage hero component)

# Save progress (can do this multiple times)
./save-work.sh "Updated hero headline"

# Make more changes...
./save-work.sh "Added CTA buttons"

# All done? Merge to main
./finish-feature.sh
```

### **Example 2: Fixing a Bug**

```bash
# Start
./start-feature.sh fix/mobile-menu

# Fix the bug...
./save-work.sh "Fixed mobile menu closing issue"

# Test it...
./save-work.sh "Added missing z-index"

# Finish
./finish-feature.sh
```

### **Example 3: Working on Multiple Features**

```bash
# Start feature 1
./start-feature.sh navbar-update
# Make changes...
./save-work.sh "WIP navbar"

# Switch to feature 2
./start-feature.sh pricing-page
# Make changes...
./save-work.sh "Added pricing tiers"

# Go back to feature 1
git checkout feature/navbar-update
# Finish it...
./finish-feature.sh

# Go back to feature 2
git checkout feature/pricing-page
# Continue working...
```

---

## 🛡️ Safety Features

### **What Happens If...**

**1. You make a mistake on a feature branch?**
- ✅ Just delete the branch: `git branch -D feature/bad-idea`
- ✅ Main branch is untouched
- ✅ Start fresh: `./start-feature.sh better-idea`

**2. You want to try something risky?**
- ✅ Create a branch: `./start-feature.sh experiment`
- ✅ Try your risky changes
- ✅ If it works: `./finish-feature.sh`
- ✅ If it doesn't: `git checkout main` and forget about it

**3. You need to pull someone else's changes?**
- ✅ Switch to main: `git checkout main`
- ✅ Pull: `git pull origin main`
- ✅ Merge into your branch: `git checkout feature/your-feature && git merge main`

**4. You forget what branch you're on?**
- ✅ Run: `./branch-status.sh`
- ✅ Shows current branch and all changes

**5. You need to work on your other computer?**
- ✅ Your branches are on GitHub
- ✅ On other computer: `git fetch origin`
- ✅ Then: `git checkout feature/your-feature`

---

## 🔥 One-Time Setup

Make scripts executable:
```bash
cd /Users/devin/XYZcode/opsflow-nextjs
chmod +x *.sh
```

---

## 🎯 Daily Workflow Cheat Sheet

**Morning:**
```bash
./start-feature.sh todays-work
```

**Throughout the day (save often!):**
```bash
./save-work.sh "Describe what you did"
```

**End of day or when done:**
```bash
./finish-feature.sh
```

**Check where you are anytime:**
```bash
./branch-status.sh
```

---

## 🆘 Troubleshooting

### **"I have uncommitted changes and want to switch branches"**
```bash
# Option 1: Save them first
./save-work.sh "WIP"

# Option 2: Temporarily stash them
git stash
git checkout other-branch
# Later: git stash pop
```

### **"I'm on main and made changes by accident"**
```bash
# Create a branch with your changes
git checkout -b feature/accidental-changes

# Now your changes are safe on a branch
./save-work.sh "Moved accidental changes to branch"
```

### **"I want to throw away all my changes"**
```bash
# ⚠️ WARNING: This deletes all uncommitted changes
git checkout .
git clean -fd
```

---

## 🌟 Pro Tips

1. **Branch names:** Use descriptive names like `navbar-redesign` not `changes`
2. **Save often:** Run `./save-work.sh` multiple times per day
3. **Keep branches small:** One feature = one branch
4. **Delete old branches:** Clean up after merging
5. **Pull regularly:** `git pull origin main` to stay updated

---

## 📚 Learn More

- [Git Branching Basics](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## 🎉 You're Protected!

With this workflow:
- ✅ Can't accidentally overwrite main
- ✅ Can experiment safely
- ✅ Can work on multiple features
- ✅ Easy to undo mistakes
- ✅ Clear history of what you did
