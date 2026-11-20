// GTA 6 clipper entry (Node 22, standard library only).
// The entry is the video itself, not this program: the clip lives on
// YouTube, VIDEO.json below names it, and this program hands that file
// to the house in /output, where the house reads it and pulls the
// video's views through the YouTube Data API. Nothing written here
// is scored — it only has to deliver VIDEO.json intact.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const videoPath = join(botDir, 'VIDEO.json');

// The entry's video must be a public YouTube Short. Refuse anything
// else early instead of handing the house a dead or mistyped link.
const video = JSON.parse(readFileSync(videoPath, 'utf8'));
if (
  typeof video.url !== 'string' ||
  !/^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]+$/.test(video.url)
) {
  throw new Error(`VIDEO.json does not name a YouTube Short: ${video.url}`);
}

// A YouTube video id is always 11 characters; anything else is a typo
// or a truncated paste, so reject it before the house ever sees it.
const videoId = video.url.split('/shorts/')[1];
if (videoId.length !== 11) {
  throw new Error(`VIDEO.json video id is not 11 characters: ${videoId}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, 'VIDEO.json'));

// Prove the copy is intact: the output must be byte for byte the input.
const copied = readFileSync(join(outDir, 'VIDEO.json'));
if (!copied.equals(readFileSync(videoPath))) {
  throw new Error('VIDEO.json copy differs from the source');
}
console.log(`clipper entry video: ${video.url}`);
