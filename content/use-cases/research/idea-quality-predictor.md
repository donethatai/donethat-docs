---
title: Idea-quality predictor
category: use-cases
lastUpdated: '2026-04-28'
tags:
  - ai
  - research
  - source
  - calibration
domain: research
domainOrder: 2
stage: source
stageOrder: 2
outcome:
  - quality
value: 2
effort: 5
---
Idea-quality predictor uses historical long-list to deep-dive outcomes to estimate which new candidates are unlikely to survive later review, freeing triage attention for uncertain tail cases.

## What it is, how it works

- Acts as a de-prioritizer rather than a gatekeeper.
- Helps teams audit whether attention is going to the right candidates.
- Should be hidden until after independent scores to avoid anchoring raters.

## When not to use it

- Do not use it as an automatic verdict on research quality.
- Do not use it before the team agrees how source decisions should be reviewed.
- Keep human ownership clear when the output affects funding, prioritization, or recommendations.

## How to get started

- Pick one active source workflow where the cost of a bad call is visible.
- Run the assistant on a small sample and compare its output against human review.
- Decide which outputs become decision inputs and which stay as reviewer prompts.

## Best practices / further reading

- Store outputs with the candidate or round so later teams can audit the reasoning.
- Track whether the tool changed decisions, saved time, or surfaced missed evidence.
- Review results after the round and feed lessons back into the next workflow.
