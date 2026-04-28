---
title: Calibration-aware aggregator
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
effort: 5
---
Calibration-aware aggregator weights each rater's score by their historical calibration on past rounds when outcomes are known.

## What it is, how it works

- Uses resolved past decisions to improve current score aggregation.
- Makes calibration an input to review quality instead of an informal reputation signal.
- Requires multiple historical rounds with outcome data.

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
