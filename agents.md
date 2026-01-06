# Agents Guide

Build logic and structure for the DoneThat documentation repository.

## Directory Structure

- **`content/`** - Source of truth (atomic markdown files)
  - `content/guides/` - Feature documentation
  - `content/faq/` - Q&A files
- **`schema/structure.json`** - Auto-generated registry mapping categories to files
- **`metadata.json`** - Global app metadata

## File Format

Every Markdown file in `content/` has YAML frontmatter:

```yaml
---
title: "Feature Name"
category: "features"
lastUpdated: "2025-01-20"
tags: ["tag1", "tag2"]
summary: "Brief description"
platforms: ["mac", "windows"]  # Optional, only if platform-specific
---
```

## Schema Generation

The `schema/structure.json` file is **auto-generated** by `scripts/deploy-docs.cjs`:

- Scans all `content/**/*.md` files
- Extracts `category` from frontmatter
- Maps `category` → navigation groups
- Uses file basename (without `.md`) as slug in `files` array
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

