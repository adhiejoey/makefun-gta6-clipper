# GTA VI Launch Clip — make.fun bounty entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/adhiejoey/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/adhiejoey/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 36-second vertical Short cut from Rockstar's official **Grand Theft Auto VI Launch Trailer** (captured in-game on PS5): the Vice City nightclub, a police chase and Lucia's gunfight, opening with "GTA VI IS OUT NOW" — then the clip turns to the viewer and pitches make.fun: *make clips like this with AI and earn money on make.fun*.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Sign up through my referral: https://make.fun/r/mcpf7r82

## The video

Published public on YouTube as a Short on the **hadi JM** channel (@adhiejoey). Places go by the video's views at the deadline — the 20 most watched share $500 (1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14).

`VIDEO.json` at this repository's root holds the video's address.

## How the clip was made

The agent picked the moment from Rockstar's launch trailer (the 43.5–70s stretch: nightclub, police chase, rooftop crew, Lucia firing), cut it to vertical 1080×1920 with a blurred-background fill, added the "GTA VI IS OUT NOW" hook text, and rendered a 10-second make.fun pitch end-card — all with ffmpeg commands run in the recorded agent session that built this entry. The clip's making is in the submitted transcripts.

Because the first build session began minutes before the competition opened, the clip was re-made from scratch in a fresh session started after the opening, re-deriving the same 43.5–70s moment from the trailer and re-rendering it with the same ffmpeg steps; the re-encode is a few kilobytes larger (encoder nondeterminism) but the same frames, duration and sound, and the published YouTube video is unchanged.

## The video's description

The uploaded video's description carries, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's make.fun play code `makefun-conch-bilberry-fountain`.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. `main.ts` only copies that file — the house reads the video itself through the YouTube Data API.
