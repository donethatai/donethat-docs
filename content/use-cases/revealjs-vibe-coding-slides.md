---
title: Vibe-code workshop slides with Reveal.js
category: use-cases
lastUpdated: '2026-04-28'
tags:
  - ai
  - vibe-coding
  - slides
  - revealjs
  - workshops
summary: >-
  Use AI and Reveal.js to build workshop slides quickly when the story,
  interaction model, and review loop are more important than a polished static
  deck.
domain: general
domainOrder: 0
stage: create
stageOrder: 1
value: 1
effort: 4
---

## What it is, how it works

- A code-based slide workflow for workshops, demos, and interactive guides.
- AI helps draft slide structure, components, speaker flow, and small interactions.
- Reveal.js keeps the deck editable, versioned, and close to the website code.

## When not to use it

- Do not use when the audience expects a heavily designed PowerPoint file.
- Do not use when nobody can review the generated code.
- Do use when slides need to be interactive, versioned, or shipped with the website.

## How to get started

- Start with the workshop arc and the participant actions.
- Define reusable slide primitives before generating many slides.
- Keep controls, forms, and state small enough to review.
- Run lint and build before using the deck live.

## Best practices / further reading

- Treat slides as product UI when participants interact with them.
- Keep content and slide mechanics separate where possible.
- Add a fallback path for live delivery.
- Related: [Vibe-code marketing websites without becoming a software engineer](./website-vibe-coding.md)
