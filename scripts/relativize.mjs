// Rewrites absolute asset URLs in built HTML to relative paths so the site
// renders correctly when served from a sub-path proxy (e.g. sites.pplx.app).
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";

const root = "dist";

function walk(dir, cb) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, cb);
    else cb(full);
  }
}

// Absolute site paths to rewrite -> relative from the HTML file's directory.
const absolutePrefixes = ["/_astro/", "/favicon.svg", "/favicon.ico"];

let touched = 0;
walk(root, (file) => {
  if (!file.endsWith(".html")) return;
  let html = readFileSync(file, "utf8");
  const fromDir = dirname(file);
  const changed = html.replace(
    /(?:href|src)="(\/[^"]*)"/g,
    (match, url) => {
      if (!absolutePrefixes.some((p) => url === p || url.startsWith(p))) return match;
      let rel = relative(fromDir, root);
      if (rel === "") rel = ".";
      const relUrl = `${rel}${url}`;
      return match.replace(`"${url}"`, `"${relUrl}"`);
    }
  );
  if (changed !== html) {
    writeFileSync(file, changed);
    touched++;
  }
});
console.log(`Relativized assets in ${touched} HTML file(s).`);
