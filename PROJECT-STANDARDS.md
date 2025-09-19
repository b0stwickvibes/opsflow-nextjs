# Project Standards — 3-File SOP System

**Start with these 3 files for all development decisions:**

## 🎯 **Your Development SOPs**

### **1. [DEVELOPMENT-SOP.md](./DEVELOPMENT-SOP.md)** ← **Daily Coding**
- Component creation, styling rules, page protocols
- Uses your actual OKLCH tokens and marketing playbook
- Restaurant operations focus throughout

### **2. [PROJECT-STATUS-SOP.md](./PROJECT-STATUS-SOP.md)** ← **Current Status**  
- What's built vs. what's needed
- Next priorities and task tracking
- Component inventory and known issues

### **3. [ARCHITECTURE-SOP.md](./ARCHITECTURE-SOP.md)** ← **Enterprise Patterns**
- Domain structure, performance patterns, security
- Reference only during major refactoring

---

## 🛠️ **Quality Guardrails**
```bash
npm run enforce:all            # Dependency health + filename validation
npx tsc -p tsconfig.json --noEmit  # TypeScript compilation check
```

## 🚀 **Quick Commands**
```bash
npm run dev                    # Development server
npm run build                  # Production build
```

---

**Rule: When adding new protocols, update the existing 3 SOP files. Never create new .md files.**
