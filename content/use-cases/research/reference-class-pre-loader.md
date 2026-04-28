---
title: Reference-class pre-loader
category: use-cases
lastUpdated: '2026-04-28'
tags:
  - ai
  - research
  - triage
  - calibration
domain: research
domainOrder: 2
stage: triage
stageOrder: 3
outcome:
  - quality
value: 4
effort: 3
---
Reference-class pre-loader surfaces the nearest historical analogues for each candidate, including internal and external examples with their actual outcomes.

## What it is, how it works

- Adds outside-view calibration to candidate scoring.
- Highlights when a score diverges sharply from comparable cases.
- Is safest after an independent first score so it does not anchor judgment.

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
