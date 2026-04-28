---
title: Data enrichment
category: use-cases
lastUpdated: '2026-04-28'
tags:
  - ai
  - spreadsheets
  - data
  - google-sheets
  - operations
summary: >-
  Use AI data enrichment when rows need classification, summaries, cleanup, or
  missing context and manual spreadsheet work is slowing you down.
domain: general
domainOrder: 0
stage: select
stageOrder: 5
value: 3
effort: 2
---

## What it is, how it works

- Add AI-generated columns to existing spreadsheets.
- Good for categorizing feedback, summarizing notes, extracting fields, or normalizing messy text.
- Google Sheets can use `=AI()` / `=Gemini()` and Gemini Smart Fill where available.

## When not to use it

- Don't enrich data you are not allowed to send to the AI provider.
- Avoid high-stakes classification without review and sampling.
- Do not treat generated enrichment as source data.

## How to get started

- In Google Sheets, try `=AI("categorize this customer message", A2)` on a small sample.
- Use a few checked examples before filling a whole column.
- Compare outputs against known labels before building reports from them.

## Best practices / further reading

- Keep prompts narrow and include the relevant cell or range.
- Add a review column for uncertain outputs.
- Check [Google Sheets AI function](https://support.google.com/docs/answer/15820999), [Gemini Smart Fill](https://support.google.com/docs/answer/14226603), and [Gemini in Sheets](https://workspace.google.com/intl/en/resources/spreadsheet-ai/).
