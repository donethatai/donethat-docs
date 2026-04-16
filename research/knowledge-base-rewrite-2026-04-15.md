# Knowledge Base Rewrite Notes

Date: 2026-04-15

This brief was used to rewrite the five longform KB articles. Primary sources were favored so the articles reflect workflow reality, not aggregator copy.

## AI for software engineers

Primary sources
- OpenAI: Codex app announcement and product/access pages
- Cursor: official features and docs
- Anthropic: Claude Code product page and official docs

Durable takeaways
- The real split is workflow shape, not model IQ: editor-first, terminal-first, or delegated/background work.
- All three tools improve throughput only when repos already have review, tests, and clear task definitions.
- Background agents increase leverage and also increase the need for diff review, permissions, and rollback discipline.
- Weak repos get worse with AI: large diffs, unclear ownership, and false confidence become the failure mode.

## Best AI for work

Primary sources
- Anthropic: Claude product/team pages
- Google Workspace: Gemini in Workspace pages
- Microsoft: Microsoft 365 Copilot product pages

Durable takeaways
- Suite integration is usually the deciding factor for teams, not benchmark-level prose quality.
- Claude is strongest when people are willing to work in a separate assistant and care about writing/reasoning quality.
- Gemini and Copilot become attractive when they live inside the suite where the work already happens.
- Admin, billing, data controls, and rollout friction matter more than superficial prompt comparisons for team defaults.

## Dictation AIs

Primary sources
- Wispr Flow docs
- OpenAI Whisper repository/docs

Durable takeaways
- The bottleneck is not transcription quality alone. The real issue is capture friction plus cleanup burden.
- A dictation workflow has three layers: capture app, transcription engine, and rewrite step.
- Dedicated dictation wrappers win when people need low-friction cross-app drafting.
- Raw transcription engines are best when teams are building their own flow or need tighter control.

## Workflow automation

Primary sources
- n8n docs
- Zapier quick-start/help docs
- GitHub Actions docs

Durable takeaways
- Automation succeeds on stable, repetitive work with bounded downside.
- A useful assessment frame is: volume, variance, reversibility, visibility, ownership.
- Classic trigger-action automation and repo automation are different from AI-assisted automation and should not be treated as the same thing.
- Many bad automation projects are actually deletion, simplification, or delegation problems.

## Website iteration with AI

Primary sources
- Next.js App Router docs
- Figma design systems guidance
- web.dev performance guidance

Durable takeaways
- Fast website iteration works when constraints are fixed first: layout system, copy hierarchy, CTA, and component vocabulary.
- AI is most useful for generating alternatives, not for deciding the system itself.
- Review loops need explicit checks for consistency, accessibility, performance, and SEO.
- “Vibe coding” only works sustainably when the vibe is constrained by an existing design system and stopping rules.
