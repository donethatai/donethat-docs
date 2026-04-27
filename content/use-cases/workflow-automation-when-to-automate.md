---
title: "Decide which workflow should be automated"
category: "use-cases"
lastUpdated: "2026-04-27"
tags: ["automation", "workflow", "ai", "systems", "operations"]
summary: "Choose automation targets that are repetitive, stable, visible, and owned instead of automating messy work."
domain: "operations"
domainOrder: 2
stage: "prioritize"
stageOrder: 1
value: 5
effort: 3
function: "operations"
---

## What it is

- A decision test for automation candidates.
- Covers classic automation, repo automation, AI-assisted workflows, and deletion.
- Focuses on value, failure visibility, and ownership.

## When to use

- Use before building scripts, workflows, or agent steps.
- Use when a process repeats often enough to matter.
- Do not use when nobody agrees how the manual process works.

## How to get started

- Capture trigger, inputs, steps, outputs, exceptions, and failure impact.
- Score volume, variance, reversibility, visibility, and ownership.
- Automate the smallest stable slice.
- Add monitoring before expanding scope.

## Best practices

- Do not automate broken work.
- Use deterministic rules where rules are enough.
- Assign a real owner after launch.
- Related: [Ship a marketing page fast without design drift](./website-vibe-coding.md)
