/** Read-only public repository inspection. No visitor requests and no auto-generated claims. */
import { mkdir, writeFile } from "node:fs/promises";
const owner = "saipran23";
const targets = [
  "saipran23",
  "OpenShelf",
  "AUTOBANK-PRO",
  "codeReview",
  "socialMedis",
];
const directory = new URL("../docs/github-evidence/", import.meta.url);
await mkdir(directory, { recursive: true });
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "Praneeth-Portfolio-Content-Review",
};
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
async function get(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers,
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`GitHub ${response.status}: ${path}`);
  return response.json();
}
let failed = 0;
for (const repo of targets) {
  try {
    const base = `/repos/${owner}/${repo}`;
    const info = await get(base);
    const readme = await get(base + "/readme").catch(() => null);
    const languages = await get(base + "/languages");
    const tree = await get(
      base +
        `/git/trees/${encodeURIComponent(info.default_branch)}?recursive=1`,
    );
    const manifests = tree.tree
      .filter(
        (p) =>
          /(^|\/)(package\.json|pom\.xml|requirements\.txt|build\.gradle|Dockerfile)$/.test(
            p.path,
          ) && !/(node_modules|vendor)\//.test(p.path),
      )
      .slice(0, 12);
    const contents = [];
    for (const file of manifests) {
      const content = await get(
        base +
          "/contents/" +
          file.path.split("/").map(encodeURIComponent).join("/"),
      );
      contents.push({
        path: file.path,
        content: Buffer.from(content.content, "base64").toString("utf8"),
      });
    }
    const snapshot = {
      inspectedAt: new Date().toISOString(),
      repo: info.full_name,
      description: info.description,
      homepage: info.homepage,
      defaultBranch: info.default_branch,
      readme: readme
        ? Buffer.from(readme.content, "base64").toString("utf8")
        : null,
      languages,
      paths: tree.tree.map((f) => f.path),
      manifests: contents,
    };
    await writeFile(
      new URL(repo + ".json", directory),
      JSON.stringify(snapshot, null, 2),
    );
    console.log(
      `Saved evidence for ${info.full_name}. Review before editing project copy.`,
    );
  } catch (error) {
    failed++;
    console.error(`${repo}: ${error.message}`);
  }
}
if (failed) process.exitCode = 1;
