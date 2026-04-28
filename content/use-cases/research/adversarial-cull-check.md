---
title: Adversarial cull-check
category: use-cases
lastUpdated: '2026-04-28'
tags:
  - ai
  - research
  - triage
  - coverage
domain: research
domainOrder: 2
stage: triage
stageOrder: 3
outcome:
  - quality
value: 3
effort: 2
---
Adversarial cull-check independently re-scores a sample of dropped candidates with an advocate agent to surface ideas that may have been rejected for weak or incomplete reasons.

## What it is, how it works

- Focuses review time on false negatives rather than only surviving candidates.
- Flags dropped ideas when the advocate identifies a factual gap.
- Keeps recall high without reopening every rejected candidate.

## When not to use it

- Do not use it as an automatic verdict on research quality.
- Do not use it before the team agrees how triage decisions should be reviewed.
- Keep human ownership clear when the output affects funding, prioritization, or recommendations.

## How to get started

- Pick one active triage workflow where the cost of a bad call is visible.
- Run the assistant on a small sample and compare its output against human review.
- Decide which outputs become decision inputs and which stay as reviewer prompts.

## Best practices / further reading

- Store outputs with the candidate or round so later teams can audit the reasoning.
- Track whether the tool changed decisions, saved time, or surfaced missed evidence.
- Review results after the round and feed lessons back into the next workflow.
