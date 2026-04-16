# Agents Guide

Build logic and structure for the DoneThat documentation repository.

## Directory Structure

- **`content/`** - Source of truth (atomic markdown files)
  - `content/guides/` - Feature documentation
  - `content/faq/` - Q&A files
  - `content/use-cases/` - Outcome-first use case documentation
- **`schema/terminology.json`** - Domain and stage registry for use cases
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
summary: "Brief description"
domain: "it"  # Use-cases only
stage: "select"  # Use-cases only
---
```

## Schema Generation

The `schema/structure.json` file is **auto-generated** by `scripts/deploy-docs.cjs`:

- Scans all `content/**/*.md` files
- Extracts `category` from frontmatter
- Maps `category` → navigation groups
- Uses file basename (without `.md`) as slug in `files` array
- Copies `domains` from `schema/terminology.json`
- Builds a `useCases` index from use-case frontmatter
- Validates every use-case `domain` and `stage` against `schema/terminology.json`
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
