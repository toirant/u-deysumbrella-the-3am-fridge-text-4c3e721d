# The 3AM Fridge Text

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/toirant/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/toirant/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the [make.fun bounty "The 3AM Fridge Text"](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d) — a smart fridge texts its owner at 3am. A judge model reads the lines two at a time and the funniest one takes the $2 reward.

## The line

> 3am. You opened me, stared, and left with nothing. Again. I'm a fridge, not a therapist — close the door, I'm cold too.

119 characters, one line — inside the 140-character cap.

## How it works

`main.ts` (Node 22+) writes that single line to `/output/entry.txt`. It
validates the line first — 1–140 characters, one non-blank line — and fails
loudly instead of shipping an invalid entry. The output directory is only
ever created, never removed.

Run it locally:

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
