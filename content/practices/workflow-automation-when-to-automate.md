---
title: "Workflow automation: decide what to automate (and what not to)"
category: "practices"
lastUpdated: "2026-04-14"
tags: ["automation", "workflow", "ai", "systems", "ops"]
summary: "A simple framework to choose automations that actually save time and reduce cognitive load."
description: "Use a quick decision framework to pick automations that stick: evaluate volume, variance, and risk, then pick the right tool."
role: ["individual_contributor", "manager", "founder"]
problem: "Automation projects take time and often fail to pay back because the wrong tasks get automated."
triggers:
  - "You keep doing the same small admin steps repeatedly."
  - "You’ve built automations before that broke or became maintenance burdens."
  - "You’re considering tools like n8n or AI coding agents but aren’t sure what’s worth it."
prerequisites:
  - "You can describe the task as a repeatable sequence of steps."
  - "You can tolerate some iteration (automation is rarely perfect first try)."
difficulty: "medium"
scope: "team"
tooling: ["n8n", "zapier", "google_workspace", "claude_code", "cursor", "github_actions"]
process: "operations"
subprocess: "automation_selection"
timeSavedMinutesPerRun: 5
runsPerWeek: 30
timeSavedMinutesPerWeek: 150
---

## When to use

- You feel “death by a thousand cuts” from small repetitive actions.
- You want a repeatable way to choose automation candidates.

## Things considered

### Classic automations (Zapier/n8n/Google)
- Best for stable workflows with predictable inputs/outputs.
- Usually lower risk, easier to maintain, less “magic.”

### AI-assisted automations (Claude Code/Cursor/etc.)
- Best when the automation requires judgment, text manipulation, or code changes.
- Higher leverage, but higher variance and requires guardrails.

## Best based on assessment

### The 3V test: Volume, Variance, Vulnerability
Automate when:
- **Volume** is high (many runs/week)
- **Variance** is low (inputs don’t change much)
- **Vulnerability** is low (mistakes are cheap or easily reversible)

If variance or vulnerability is high, prefer:
- A simpler partial automation (reduce steps, not full autonomy), or
- A checklist/playbook (standardize the human process), or
- Delegation/training rather than automation.

## How to get started

### Step 1: Capture one “automation candidate” exactly
Write down:
- Trigger (what starts it)
- Inputs
- Steps (5–15 bullet points)
- Output
- What could go wrong

### Step 2: Score it quickly
- Volume: runs per week?
- Variance: are inputs structured?
- Vulnerability: what’s the cost of a wrong run?

### Step 3: Choose the simplest tool that works
- If it’s mostly moving data between systems → n8n/Zapier/Google automation
- If it’s editing text/code with rules → AI coding assistant with guardrails

### Step 4: Add guardrails
- Logging/notifications
- Dry-run mode when possible
- Clear rollback path

## Pitfalls

- Automating something you don’t understand well yet.
- Automating a broken process (you just make mistakes faster).
- Building a “house of cards” integration without monitoring.

## Related

- “AI for software engineers: Codex vs Cursor vs Claude Code” (library page)
