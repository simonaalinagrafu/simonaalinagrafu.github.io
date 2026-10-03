// Regenerates both CV PDFs from the built site.
//
//   npm run build && npm run cv
//
// The /resume-print/ pages render entirely from src/data/profile/, so this is
// the step that keeps public/cv-*.pdf in step with the data. It prints from
// `astro preview` rather than `astro dev` on purpose: the dev server injects
// the Astro dev toolbar into the page.
//
// Override the browser with CHROME_PATH if yours lives elsewhere.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = process.env.PORT ?? '4322';
const ORIGIN = `http://localhost:${PORT}`;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to your browser executable.');
  process.exit(1);
}

// One entry per locale: the page to print and the file it becomes.
const TARGETS = [
  { url: `${ORIGIN}/resume-print/`, out: join(root, 'public', 'cv-ro.pdf'), label: 'ro' },
  { url: `${ORIGIN}/en/resume-print/`, out: join(root, 'public', 'cv-en.pdf'), label: 'en' },
];

if (!existsSync(join(root, 'dist', 'resume-print', 'index.html'))) {
  console.error('No build found. Run `npm run build` first.');
  process.exit(1);
}

const preview = spawn('npx', ['astro', 'preview', '--port', PORT], {
  cwd: root,
  stdio: 'ignore',
  shell: true,
});

const stop = () => {
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/pid', String(preview.pid), '/T', '/F'], { stdio: 'ignore' });
  } else {
    preview.kill('SIGTERM');
  }
};
process.on('exit', stop);

async function waitForServer(timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${ORIGIN}/resume-print/`);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server did not start on ${ORIGIN}`);
}

try {
  await waitForServer();

  for (const { url, out, label } of TARGETS) {
    const result = spawnSync(
      chrome,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${out}`,
        url,
      ],
      { stdio: 'inherit' },
    );
    if (result.status !== 0) throw new Error(`Chrome failed printing ${label}`);
    console.log(`${label} → ${out}`);
  }
  console.log('\nBoth CVs regenerated. Check each stays within two pages.');
} finally {
  stop();
}
