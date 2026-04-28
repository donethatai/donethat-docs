# Agents Guide

Build logic and structure for the DoneThat documentation repository.

## Directory Structure

- **`content/`** - Source of truth (atomic markdown files)
  - `content/guides/` - Feature documentation
  - `content/knowledge-base/` - Knowledge-base articles and interactive guide source
  - `content/faq/` - Q&A files
  - `content/use-cases/<domain>/` - Outcome-first use case documentation grouped by domain
- **`schema/terminology.json`** - Domain, stage, and outcome registry for use cases
- **`schema/structure.json`** - Auto-generated registry for category nav plus use-case filters
- **`metadata.json`** - Global app metadata

## File Format

Every Markdown file in `content/` has YAML frontmatter:

```yaml
---
title: "Page Title"
category: "use-cases"
lastUpdated: "2025-01-20"
tags: ["tag1", "tag2"]
summary: "Brief description"  # Non-use-cases only
domain: "it"  # Use-cases only
stage: "select"  # Use-cases only
outcome: ["quality", "speed"]  # Use-cases only: cost, quality, speed
---
```

For use-cases, do not put the description in frontmatter. The first body paragraph is the page description and is copied into `schema/structure.json` as the generated summary.

## Schema Generation

The `schema/structure.json` file is **auto-generated** by `scripts/deploy-docs.cjs`:

- Scans all `content/**/*.md` files
- Extracts `category` from frontmatter
- Maps `category` → navigation groups
- Uses file basename (without `.md`) as slug in `files` array
- Copies `domains` from `schema/terminology.json`
- Copies `outcomes` from `schema/terminology.json`
- Builds a `useCases` index from use-case frontmatter
- Validates every use-case `domain`, `stage`, and `outcome` against `schema/terminology.json`
- Sorts categories and files alphabetically

**Do not manually edit `structure.json`** - it's regenerated on deploy.

## Deploy Script

Run `npm run deploy-docs` to:
1. Regenerate `schema/structure.json` from content
2. Update `metadata.json.lastUpdated` to today's date
3. Commit and push changes

## Parsing Files

- Use `gray-matter` (or equivalent) to parse frontmatter + body
- Frontmatter is YAML between `---` delimiters
- Body is markdown after the closing `---`
