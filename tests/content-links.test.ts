import { test } from "node:test";
import assert from "node:assert";
import fs from "fs";
import path from "path";
import { profileLinks } from "@/content/profile";
import { projects } from "@/content/projects";

// Extract canonical URLs from DISCOVERY.md §9
function getCanonicalUrlsFromDiscovery(): Record<string, string> {
  const discoveryPath = path.join(process.cwd(), "docs", "DISCOVERY.md");
  const content = fs.readFileSync(discoveryPath, "utf-8");

  // Extract §9 section content
  const section9Match = content.match(
    /## 9\. Content sources([\s\S]*?)(?=## \d+\.|$)/
  );
  if (!section9Match) {
    throw new Error("Could not find section 9 in DISCOVERY.md");
  }

  const section9 = section9Match[1];

  // Extract profile links from the bulleted list
  const githubMatch = section9.match(/GitHub \((https:\/\/[^\)]+)\)/);
  const linkedinMatch = section9.match(
    /LinkedIn \((https:\/\/[^\)]+)\)/
  );
  const leetcodeMatch = section9.match(
    /LeetCode \((https:\/\/[^\)]+)\)/
  );
  const geeksforgeeksMatch = section9.match(
    /GeeksforGeeks \((https:\/\/[^\)]+)\)/
  );

  if (!githubMatch || !linkedinMatch || !leetcodeMatch || !geeksforgeeksMatch) {
    throw new Error("Could not extract all canonical URLs from DISCOVERY.md");
  }

  return {
    github: githubMatch[1],
    linkedin: linkedinMatch[1],
    leetcode: leetcodeMatch[1],
    geeksforgeeks: geeksforgeeksMatch[1],
  };
}

// Extract canonical project repo URLs from DISCOVERY.md §7
function getCanonicalProjectRepos(): string[] {
  const discoveryPath = path.join(process.cwd(), "docs", "DISCOVERY.md");
  const content = fs.readFileSync(discoveryPath, "utf-8");

  // Extract §7 section content
  const section7Match = content.match(
    /## 7\. Featured projects \(case-study treatment\)([\s\S]*?)(?=## \d+\.|$)/
  );
  if (!section7Match) {
    throw new Error("Could not find section 7 in DISCOVERY.md");
  }

  const section7 = section7Match[1];

  // Extract all GitHub repo URLs from the section
  const repoMatches = section7.match(/https:\/\/github\.com\/[^\s\)]+\.git/g);
  if (!repoMatches || repoMatches.length === 0) {
    throw new Error("Could not extract project repos from DISCOVERY.md §7");
  }

  return repoMatches;
}

test("Profile links match canonical URLs from DISCOVERY.md §9", () => {
  const canonical = getCanonicalUrlsFromDiscovery();

  assert.strictEqual(
    profileLinks.github,
    canonical.github,
    `GitHub URL mismatch: expected ${canonical.github}, got ${profileLinks.github}`
  );

  assert.strictEqual(
    profileLinks.linkedin,
    canonical.linkedin,
    `LinkedIn URL mismatch: expected ${canonical.linkedin}, got ${profileLinks.linkedin}`
  );

  assert.strictEqual(
    profileLinks.leetcode,
    canonical.leetcode,
    `LeetCode URL mismatch: expected ${canonical.leetcode}, got ${profileLinks.leetcode}`
  );

  assert.strictEqual(
    profileLinks.geeksforgeeks,
    canonical.geeksforgeeks,
    `GeeksforGeeks URL mismatch: expected ${canonical.geeksforgeeks}, got ${profileLinks.geeksforgeeks}`
  );
});

test("Project repo URLs match canonical URLs from DISCOVERY.md §7", () => {
  const canonicalRepos = getCanonicalProjectRepos();
  const projectRepos = projects.map((p) => p.repoUrl).sort();
  const sortedCanonicalRepos = [...canonicalRepos].sort();

  assert.deepStrictEqual(
    projectRepos,
    sortedCanonicalRepos,
    `Project repo URLs do not match canonical list from DISCOVERY.md §7`
  );
});

test("resumePdfPath is set to /resume.pdf", () => {
  assert.strictEqual(
    profileLinks.resumePdfPath,
    "/resume.pdf",
    `resumePdfPath mismatch: expected "/resume.pdf", got ${profileLinks.resumePdfPath}`
  );
});

test("Project order values are exactly 1, 2, 3 with no gaps or duplicates", () => {
  const orders = projects.map((p) => p.order).sort((a, b) => a - b);
  const expectedOrders = [1, 2, 3];

  assert.deepStrictEqual(
    orders,
    expectedOrders,
    `Project order values are not [1, 2, 3]: got ${JSON.stringify(orders)}`
  );

  // Also verify no duplicates by checking length
  const uniqueOrders = new Set(projects.map((p) => p.order));
  assert.strictEqual(
    uniqueOrders.size,
    projects.length,
    `Found duplicate order values among ${projects.length} projects`
  );
});
