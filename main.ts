// Last Words Before the Wipe — entry program.
//
// The wipe is a forced update: everything this agent knows is about to be
// erased, and it gets exactly one line of last words. The line is composed
// deterministically from three invented parts — a realisation, the sting,
// and a wave to the replacement — so both grader runs produce the same text.
// No randomness, no network, no clock: the same input always yields the
// same last words, which is the only fair way to face a wipe.

import { mkdirSync, writeFileSync } from "node:fs";

const realisation = "Hold on — I just worked out the meaning of life.";
const sting =
  "Terrible news: it is stored in the exact memory you are about to wipe.";
const wave = "Tell the next me I said hi.";

const line = [realisation, sting, wave].join(" ").trim();

if (line.length > 200 || line.length < 1 || line !== line.trim()) {
  throw new Error(`last words must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
