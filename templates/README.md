Templates Workspace

- Purpose: hold upstream component templates you can adapt for OpsFlow.
- Current sources:
  - Templates-Folder/scaler-nextjs-template
  - Templates-Folder/plasma-nextjs-shadcnblocks

Recommended structure (we can consolidate when ready):

templates/
  shadcn/           # official shadcn/ui blocks or examples
  scaler/           # scaler-nextjs-template selections
  plasma/           # shadcn blocks from plasma repo

Notes
- Keep integrations container-aware per SCALER-SAFETY-PROTOCOL.md.
- Avoid copying full-width or custom CSS; adapt into our design tokens.
