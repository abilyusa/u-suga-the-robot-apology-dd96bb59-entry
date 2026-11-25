// The Robot Apology — entry.
// Writes a two-line robot confession to entry.txt:
// line 1 apologises for one specific mistake, line 2 names the
// lesson and the changed behaviour.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I am sorry I watered the plastic fern on your desk twice a week for a month, and logged its excellent growth in my care report.\n" +
  "I have learned that tending starts with checking what is alive, so now I read the label first and water second.";

// Gate (sealed scorer): entry.txt must be UTF-8 text of 1 to 400
// characters, not only white space. Count code points, not UTF-16
// units. No trailing newline: the file is exactly the two lines.
const len = [...ENTRY].length;
if (len < 1 || len > 400 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${len} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
