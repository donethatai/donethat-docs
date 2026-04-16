---
title: "Draft messages and notes faster with dictation"
category: "use-cases"
lastUpdated: "2026-04-16"
tags: ["ai", "writing", "communication", "accessibility", "dictation"]
summary: "Use dictation when spoken drafting is faster than typing and the capture, cleanup, and sending flow fits how people actually write."
domain: "it"
stage: "select"
---

## When to use

- You write high volumes of messages, updates, notes, or first drafts.
- You think faster than you type, especially when explaining something familiar.
- You want a repeatable drafting workflow, not just a novelty transcription demo.

## What this is actually good for

Most people evaluate dictation tools on the wrong question: "How accurate is the transcription?"

That matters, but the real workflow has three layers:

- capture: how fast you can start talking in the app you are already using
- transcription: how well speech turns into text
- cleanup: how easily rough speech becomes something you would actually send

That is why dictation can feel magical for one person and useless for another using the same underlying model. The difference is usually workflow friction, not just speech recognition quality.

Dictation is best for:

- rough drafting
- messages you can edit quickly
- outlining before writing properly
- end-of-day communication when typing energy is low

It is much worse for exact wording, dense tables, code, and anything that requires precision while you speak.

## Things considered

### [Wispr Flow](https://wisprflow.ai/)

Wispr Flow is a dictation product, not just a speech model. That distinction matters.

- Best fit: people who want a system-wide hotkey and the ability to dictate directly into Slack, email, docs, and other text fields.
- Why it works: low-friction capture is often the decisive factor. If starting dictation is awkward, people stop using it no matter how good the model is.
- Constraints: the tool has to fit your device setup, keyboard habit, and working environment. If the hotkey or insertion flow feels unreliable, adoption dies immediately.
- Operational reality: dedicated dictation apps win when the goal is many small drafting moments throughout the day, not batch transcription after the fact.

### [Whisper](https://github.com/openai/whisper)

Whisper is a speech recognition model and ecosystem, not a polished daily dictation workflow by itself.

- Best fit: teams building their own capture or transcription pipeline, or users who care more about the engine than the surrounding product.
- Why it matters: it is useful when you want control over how speech is processed, stored, or integrated.
- Constraints: by itself it does not solve the workflow problem. You still need a good wrapper, a clean insertion path, and often a rewrite step.
- Operational reality: Whisper is usually part of a dictation stack, not the whole stack.

### The rewrite step

For most people, the biggest upgrade is not better transcription. It is a reliable post-edit step.

- Best fit: cleaning up spoken drafts into concise messages, better structure, clearer tone, or a more professional finish.
- Why it matters: spoken language is repetitive and messy. Written language usually needs compression.
- Constraints: if the rewrite step is too slow or too fussy, you lose the speed advantage of dictation.

## Best based on assessment

### The best default is usually "dictate, rewrite, send"

For most people, the winning workflow is:

1. Speak a rough draft quickly.
2. Run a short cleanup pass.
3. Check the result and send.

If you want a daily tool that works across apps with minimal setup friction, **Wispr Flow** or a similar dedicated dictation wrapper is usually the better default.

- Best for: founders, managers, operators, and anyone sending many messages across tools.
- Under these constraints: you need it to be fast enough that you will actually trigger it several times a day.
- Downside: if your environment is noisy or your device flow is awkward, the convenience disappears.

If you are building a more custom or private workflow, **Whisper** is usually the better foundation.

- Best for: product teams, internal tooling, custom transcription pipelines, or cases where you care about the speech model more than the consumer UX.
- Under these constraints: you are willing to assemble the rest of the workflow around it.
- Downside: you do not get a polished daily habit for free.

If your messages are already short and precise, plain typing may still beat dictation.

- Best for: edits where exact wording matters from the first sentence.
- Downside of dictation here: the cleanup tax can cost more than the typing time you saved.

## How to get started

### Pick two use cases, not ten

Start where dictation has a fair shot of winning.

- Daily status updates
- Meeting follow-ups
- First-pass email drafts
- Outline notes after a call

Do not start with legal wording, code snippets, or spreadsheet-heavy updates.

### Standardize your cleanup prompt

Keep it boring and short. The goal is speed.

Example:

`Rewrite this to be clear, concise, and friendly. Preserve the intent. Use bullets if that improves readability.`

The same prompt can handle most message cleanup.

### Fix the hardware and environment first

Bad mic setup gets misdiagnosed as bad AI.

- Use the same mic or headset every day.
- Dictate in shorter bursts.
- Pause before names, numbers, or critical details.
- Avoid public spaces for anything sensitive.

### Compare dictation against typing honestly

A good workflow beats a clever one.

Track:

- how long it took to get to a sendable draft
- how much cleanup was needed
- whether you used it again the next day

If the workflow is not sticky, it is not a real productivity tool yet.

## Pitfalls

### Do not chase perfect raw transcription

Perfection is not the goal. Sendable output is.

Spoken drafts are naturally redundant. Cleanup is part of the process, not a sign of failure.

### Do not ignore privacy and social context

Dictation is a bad fit in:

- shared offices
- trains or planes
- confidential conversations
- situations where saying the draft out loud is itself the risk

### This is a bad fit when the work is highly structured

Typing is often better for:

- code
- dense tables
- exact calculations
- highly edited prose where every word matters from the start

Dictation is best when speed of first expression matters more than first-pass polish.

## Related

- [Best AI for work (2026): Claude vs Gemini vs Copilot](./best-ai-for-work.md)
- [Workflow automation: decide what to automate (and what not to)](../practices/workflow-automation-when-to-automate.md)
