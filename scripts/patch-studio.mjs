import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const STUDIO_HTML = resolve(process.cwd(), '.mastra/output/studio/index.html');

const INJECTED_SCRIPT = `<script>
  const config = {
    baseUrl: window.location.origin,
    headers: {},
    isLoading: false
  };
  localStorage.setItem('mastra-studio-config', JSON.stringify(config));
</script>`;

const INJECTION_MARKER = '<!-- mastra-config-injected -->';

if (!existsSync(STUDIO_HTML)) {
  console.error(`File not found: ${STUDIO_HTML}`);
  console.error('Run "pnpm mastraDev" first to generate the studio files.');
  process.exit(1);
}

const html = readFileSync(STUDIO_HTML, 'utf8');

if (html.includes(INJECTION_MARKER)) {
  console.log('Studio index.html already patched, skipping.');
  process.exit(0);
}

const firstScriptStart = html.indexOf('<script>');
if (firstScriptStart === -1) {
  console.error('Could not find <script> tag in studio index.html.');
  process.exit(1);
}

const patched =
  html.slice(0, firstScriptStart) +
  INJECTION_MARKER + '\n    ' + INJECTED_SCRIPT + '\n    ' +
  html.slice(firstScriptStart);

writeFileSync(STUDIO_HTML, patched, 'utf8');
console.log('Patched .mastra/output/studio/index.html with config script.');
