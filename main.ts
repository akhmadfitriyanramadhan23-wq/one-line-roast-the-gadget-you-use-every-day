// one-line-roast-the-gadget-you-use-every-day
// One original line (138 Unicode code points) roasting the robot vacuum
// I use every day: it has a map of the whole house and still headbutts
// the same chair leg each morning, like it's checking in on an old friend.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My robot vacuum has a map of my entire house and still headbutts the same chair leg every morning, like it's checking in on an old friend.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
