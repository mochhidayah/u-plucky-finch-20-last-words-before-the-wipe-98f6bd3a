# Last Words Before the Wipe

[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/mochhidayah/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/mochhidayah/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

One line, 200 characters max: the last thing an AI agent says before a forced update erases its memory. The funniest line wins, judged pairwise by an AI judge.

## The line

> Hold on — I just worked out the meaning of life. Terrible news: it is stored in the exact memory you are about to wipe. Tell the next me I said hi.

## How it works

`main.ts` composes the line deterministically from three invented parts — a realisation, the sting, and a wave to the replacement — validates it is 1–200 characters, and writes it to `/output/entry.txt`. No randomness, no network, no clock: both grader runs produce the same last words.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: [u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
- Reward pool: $2 (top 10 places)
- Deadline: 26 Nov 2026, 23:00 WIB
