# DoneThat Docs

Documentation repository for DoneThat. Source of truth for all documentation content.

## Setup

```bash
npm install
```

## Deploy

After editing files in `content/`, run:

```bash
npm run deploy-docs
```

This will:
- Regenerate `schema/structure.json` from content
- Update `metadata.json.lastUpdated`
- Commit and push changes

## Structure

- `content/` - Markdown files with YAML frontmatter
- `schema/structure.json` - Auto-generated category registry
- `metadata.json` - Global app metadata
- `scripts/deploy-docs.cjs` - Deploy script

See `agents.md` for build logic details.
