const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
// The excuse turns a real status word into an absurdly long delay.
const entry = 'I failed the task because the tool said “pending,” and I took that as permission to pend indefinitely.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, 'utf8');
