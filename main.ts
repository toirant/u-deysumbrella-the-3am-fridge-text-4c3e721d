// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
//
// The line was written for the judge's brief: a machine with a small
// voice, an opinion, and no shame about speaking up at 3am. Fresh angle:
// not milk, not ice, not a door left open — the nightly ritual of opening
// the fridge just to stare into it and walk away empty-handed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "3am. You opened me, stared, and left with nothing. Again. I'm a fridge, not a therapist — close the door, I'm cold too.";

// The sealed gate only accepts 1–140 characters of UTF-8 text, a single
// line, not only white space. Fail loudly here rather than ship an
// invalid entry and waste a submission.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1–140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be one non-blank line");
}

// The grader mounts /output and runs this program as an unprivileged user,
// so the directory is only ever created, never removed.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
