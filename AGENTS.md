<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions

> [!CAUTION]
> **MANDATORY — NO EXCEPTIONS**: You MUST read every relevant file in the `/docs` directory **before writing a single line of code**. This is not optional. Skipping this step will produce incorrect, inconsistent, or broken output. If your task touches a domain listed below, treat the corresponding doc as a hard prerequisite — stop, read it, then proceed.

The following docs each govern a specific domain of this codebase. Any task that touches that domain **requires** the doc to be read in full before generating any code, making edits, or suggesting changes.

| Doc | When to read |
|-----|-------------|
| [docs/ui.instructions.md](docs/ui.instructions.md) | Building or modifying **any** UI element, component, layout, or visual feature |
| [docs/auth.instructions.md](docs/auth.instructions.md) | Implementing authentication, protected routes, redirects, login, signup, or access-control logic |

**When in doubt, read all of them.** The cost of reading is low; the cost of ignoring them is broken code.

