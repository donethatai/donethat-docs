#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const matter = require("gray-matter");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content");
const SCHEMA_FILE = path.join(ROOT, "schema", "structure.json");
const METADATA_FILE = path.join(ROOT, "metadata.json");

function log(msg) {
  // Keep output minimal but clear
  console.log(`[deploy-docs] ${msg}`);
}

function getMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function toLabelFromCategory(id) {
  if (id === "faq") return "FAQ";
  if (id === "api") return "API Reference";
  return id
    .split(/[-_]/g)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function regenerateStructure(today, changedDocs) {
  log("Regenerating schema/structure.json from content/…");

  const files = getMarkdownFiles(CONTENT_DIR);
  const categories = new Map();

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const parsed = matter(raw);

    const category = parsed.data.category;
    if (!category) {
      log(`Skipping ${path.relative(ROOT, file)} (no 'category' in frontmatter)`);
      continue;
    }

    // Update lastUpdated for changed docs
    const relFromRoot = path
      .relative(ROOT, file)
      .replace(/\\/g, "/"); // normalize for Windows, just in case
    if (changedDocs.has(relFromRoot)) {
      parsed.data.lastUpdated = today;
      const updated = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(file, updated, "utf8");
      log(`Updated lastUpdated in ${relFromRoot} -> ${today}`);
    }

    const slug = path.basename(file, ".md");
    if (!categories.has(category)) {
      categories.set(category, {
        id: category,
        label: toLabelFromCategory(category),
        files: [],
      });
    }
    const cat = categories.get(category);
    if (!cat.files.includes(slug)) {
      cat.files.push(slug);
    }
  }

  const result = {
    categories: Array.from(categories.values())
      .map((c) => ({ ...c, files: c.files.sort() }))
      .sort((a, b) => a.id.localeCompare(b.id)),
  };

  fs.mkdirSync(path.dirname(SCHEMA_FILE), { recursive: true });
  fs.writeFileSync(SCHEMA_FILE, JSON.stringify(result, null, 2) + "\n", "utf8");
  log(`Wrote ${path.relative(ROOT, SCHEMA_FILE)}`);
}

function updateMetadata(today) {
  if (!fs.existsSync(METADATA_FILE)) {
    log("No metadata.json found, skipping metadata update.");
    return;
  }
  const raw = fs.readFileSync(METADATA_FILE, "utf8");
  const data = JSON.parse(raw);
  data.lastUpdated = today;
  fs.writeFileSync(METADATA_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
  log(`Updated metadata.json lastUpdated -> ${today}`);
}

function getChangedDocPaths() {
  try {
    const output = execSync("git status --porcelain", {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    }).toString();

    const changed = new Set();
    for (const line of output.split("\n")) {
      if (!line.trim()) continue;
      const filePath = line.slice(3).trim();
      if (filePath.startsWith("content/") && filePath.endsWith(".md")) {
        changed.add(filePath);
      }
    }
    return changed;
  } catch {
    log("git status failed, not updating per-file lastUpdated.");
    return new Set();
  }
}

function runGit() {
  const pathsToAdd = ["content", "schema", "metadata.json"];
  const existing = pathsToAdd.filter((p) => fs.existsSync(path.join(ROOT, p)));
  if (existing.length === 0) {
    log("Nothing to add to git.");
    return;
  }

  execSync(`git add ${existing.join(" ")}`, { cwd: ROOT, stdio: "inherit" });

  // Check if there are staged changes
  try {
    execSync("git diff --cached --quiet", { cwd: ROOT, stdio: "ignore" });
    log("No changes to commit.");
    return;
  } catch {
    // Exit code 1 => there are staged changes
  }

  const message = "chore(docs): deploy docs";
  log(`Committing changes: "${message}"`);
  execSync(`git commit -m "${message}"`, { cwd: ROOT, stdio: "inherit" });

  log("Pushing to default remote…");
  execSync("git push", { cwd: ROOT, stdio: "inherit" });
}

function main() {
  const today = new Date().toISOString().slice(0, 10);
  const changedDocs = getChangedDocPaths();

  regenerateStructure(today, changedDocs);
  updateMetadata(today);
  runGit();
}

main();


