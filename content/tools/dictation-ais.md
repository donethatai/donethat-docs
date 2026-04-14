---
title: "Dictation AIs: faster writing with WhisperFlow and friends"
category: "tools"
lastUpdated: "2026-04-14"
tags: ["ai", "tools", "writing", "communication", "accessibility"]
summary: "A practical guide to using dictation AI for messages and docs, with tool comparison and a simple workflow."
description: "Use dictation AI to write faster: when to use it, which tools to consider, and how to set it up as a daily workflow."
role: ["individual_contributor", "manager", "founder"]
problem: "Typing is a bottleneck for communicating clearly and consistently."
triggers:
  - "You avoid writing because it feels slow or effortful."
  - "You have lots of short messages and status updates to send."
  - "You’re mentally clear but physically tired (end of day, travel)."
prerequisites:
  - "A reasonably quiet environment or a decent microphone/headset."
  - "Willingness to edit after dictating (dictation is draft-first)."
difficulty: "easy"
scope: "individual"
tooling: ["whisperflow", "whisper", "claude", "chatgpt"]
process: "communication"
subprocess: "drafting"
timeSavedMinutesPerRun: 6
runsPerWeek: 25
timeSavedMinutesPerWeek: 150
---

## When to use

- Any time you need to produce a **draft quickly**: Slack messages, emails, outlines, notes, first-pass docs.
- When you’re stuck, dictation is often the fastest way to “break the blank page.”

## Things considered

### WhisperFlow
- Optimized for a “dictate → clean up → send” loop.
- The key question is whether it fits your OS + daily environment well enough to become default.

### Whisper (general)
- Great transcription quality; often used as the underlying engine.
- The workflow quality depends on the wrapper/app you use.

### Using an AI assistant to post-edit
- Dictate messy thoughts, then ask an assistant (Claude/ChatGPT) to rewrite for clarity, tone, and brevity.

## Best based on assessment

### Default recommendation: dictation + post-edit
The highest-leverage approach is not “perfect transcription,” it’s a reliable workflow:
1) Dictate a rough draft quickly.\n
2) Run a fast rewrite pass (clarity, structure, tone).\n
3) Do a final human check and send.

Pick a dictation tool that is frictionless enough that you’ll use it daily; then standardize the post-edit prompt.

## How to get started

### Step 1: Pick two target use cases
- “Daily Slack updates / short messages”
- “Weekly plan draft / meeting follow-ups”

### Step 2: Create a post-edit prompt
Example (keep it short and reusable):
- “Rewrite this to be clear, concise, and friendly. Preserve intent. Add bullets if helpful.”

### Step 3: Install a microphone habit
- Use the same headset/mic whenever possible.
- Stand up or walk while dictating if it helps flow.

### Step 4: Start with a 2-minute rule
If you can dictate a draft in under 2 minutes, do it. Then edit.

## Pitfalls

- Trying to dictate perfectly instead of drafting fast.
- Skipping the rewrite step, then feeling embarrassed by messy output.
- Dictating sensitive info in public spaces.

## Related

- “Workflow automation: when to automate vs delegate vs delete” (library page)
