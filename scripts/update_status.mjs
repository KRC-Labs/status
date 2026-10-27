import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALIZED_CONTENT } from './locales_data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STATUS_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(STATUS_ROOT, 'docs');
const LOCALES_DIR = path.join(DOCS_DIR, 'locales');
const DATA_FILE = path.join(STATUS_ROOT, 'data', 'versions.json');

// Parse CLI flags
const args = process.argv.slice(2);
const isVerifyOnly = args.includes('--verify-only');
let cliSystem = null;
let cliVersion = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--system' && args[i + 1]) cliSystem = args[i + 1];
  if (args[i] === '--version' && args[i + 1]) cliVersion = args[i + 1];
}

// 1. Base Version Discovery & Loading
const REPO_SOURCES = [
  { name: 'vibeside-mcp', path: 'T:/github+w871075/vibeside-mcp', type: 'node', defaultVer: '0.33.0' },
  { name: 'binvibe', path: 'T:/github_bhhjfvu/binvibe', type: 'rust', defaultVer: '0.29.0' },
  { name: 'netvibe', path: 'T:/github_nvcxzgo/netvibe', type: 'rust', defaultVer: '0.5.0' },
  { name: 'vulnforge-mcp', path: 'T:/github_nvcxzopgo/vulnforge-mcp', type: 'node', defaultVer: '1.29.0' },
  { name: 'webarcheology-mcp', path: 'T:/github_iko098567/webarcheology-mcp', type: 'node', defaultVer: '1.14.0' },
  { name: 'omni-audio-mcp', path: 'U:/github_10youop/omni-audio-mcp', type: 'mixed', defaultVer: '1.0.0' },
  { name: 'omni-control-mcp', path: 'U:/github_h1509146/omni-control-mcp', type: 'node', defaultVer: '1.13.0' },
  { name: 'omnibrowse', path: 'U:/github_goyoupo818/omnibrowse', type: 'rust', defaultVer: '0.22.0' },
  { name: 'remote-auto-ai-worker', path: 'U:/github_m326171/remote-auto-ai-worker', type: 'node', defaultVer: '1.20.0' },
  { name: 'vidcompact-mcp', path: 'U:/github_k661737/vidcompact-mcp', type: 'node', defaultVer: '1.11.0' }
];

let VERSION_MAP = {};

// Load existing data/versions.json if available
if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    if (raw && raw.versions) {
      VERSION_MAP = { ...raw.versions };
    }
  } catch (err) {
    console.warn('Warning: Could not parse data/versions.json:', err.message);
  }
}

// Fallback to default versions if empty
for (const r of REPO_SOURCES) {
  if (!VERSION_MAP[r.name]) {
    VERSION_MAP[r.name] = `v${r.defaultVer.replace(/^v/, '')}`;
  }
}

// Inspect local drives if present
for (const r of REPO_SOURCES) {
  if (fs.existsSync(r.path)) {
    try {
      if (r.type === 'node' || r.type === 'mixed') {
        const pkgPath = fs.existsSync(path.join(r.path, 'package.json'))
          ? path.join(r.path, 'package.json')
          : path.join(r.path, 'mcp/package.json');
        if (fs.existsSync(pkgPath)) {
          const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
          if (pkg.version) VERSION_MAP[r.name] = `v${pkg.version.replace(/^v/, '')}`;
        }
      } else if (r.type === 'rust') {
        const cargoPath = path.join(r.path, 'Cargo.toml');
        if (fs.existsSync(cargoPath)) {
          const cargo = fs.readFileSync(cargoPath, 'utf8');
          const m = cargo.match(/^version\s*=\s*"([^"]+)"/m);
          if (m) VERSION_MAP[r.name] = `v${m[1].replace(/^v/, '')}`;
        }
      }
    } catch {}
  }
}

// Override with CLI flag if provided
if (cliSystem && cliVersion) {
  VERSION_MAP[cliSystem] = `v${cliVersion.replace(/^v/, '')}`;
  console.log(`Explicit CLI override: [${cliSystem}] -> ${VERSION_MAP[cliSystem]}`);
}

// Persist back to data/versions.json
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}
fs.writeFileSync(DATA_FILE, JSON.stringify({
  updated_at: new Date().toISOString(),
  versions: VERSION_MAP
}, null, 2), 'utf8');

console.log('Active Systems Version Map:');
console.log(JSON.stringify(VERSION_MAP, null, 2));

const LANGS = [
  { code: 'ko', label: 'KR 한국어' },
  { code: 'en', label: 'US English' },
  { code: 'ja', label: 'JP 日本語' },
  { code: 'zh-CN', label: 'CN 简体中文' },
  { code: 'es', label: 'ES Español' },
  { code: 'hi', label: 'IN हिन्दी' },
  { code: 'fr', label: 'FR Français' },
  { code: 'de', label: 'DE Deutsch' },
  { code: 'ru', label: 'RU Русский' },
  { code: 'pt-BR', label: 'BR Português' },
  { code: 'it', label: 'IT Italiano' },
  { code: 'ar', label: 'SA العربية' }
];

// Dynamically inject live versions into all 12 language matrices
for (const langCode of Object.keys(LOCALIZED_CONTENT)) {
  const d = LOCALIZED_CONTENT[langCode];
  if (Array.isArray(d.matrix)) {
    for (const row of d.matrix) {
      const sysName = row[0];
      if (VERSION_MAP[sysName]) {
        row[2] = VERSION_MAP[sysName];
      }
    }
  }
}

function generateNavTable(context, currentLangCode, docType) {
  function getLink(targetLang) {
    if (context === 'locale') {
      return targetLang.code === currentLangCode ? `./${docType}` : `../${targetLang.code}/${docType}`;
    } else if (context === 'docs') {
      return `./locales/${targetLang.code}/${docType}`;
    } else {
      return targetLang.code === 'en' ? `./${docType}` : `./docs/locales/${targetLang.code}/${docType}`;
    }
  }

  const l = (code) => {
    const target = LANGS.find(x => x.code === code);
    return `[${target.label}](${getLink(target)})`;
  };

  return `| ${l('ko')} | ${l('en')} | ${l('ja')} | ${l('zh-CN')} | ${l('es')} | ${l('hi')} |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ${l('fr')} | ${l('de')} | ${l('ru')} | ${l('pt-BR')} | ${l('it')} | ${l('ar')} |`;
}

function buildDocBundle(d, navReadme, navStatus, navChangelog, quickNavReadme, quickNavStatus, quickNavChangelog) {
  // 1. README.md
  let matrixTable = `| ${d.th.join(' | ')} |\n| :--- | :---: | :---: | :---: | :--- |\n`;
  d.matrix.forEach(row => {
    matrixTable += `| **${row[0]}** | ${row[1]} | \`${row[2]}\` | ${row[3]} | ${row[4]} |\n`;
  });

  const readmeContent = `# ${d.readmeTitle}

${navReadme}

> **${d.readmeDesc}**  
> ${quickNavReadme}

---

## 📦 ${d.matrixLabel}

${matrixTable}

---

${d.securitySection}
`;

  // 2. STATUS.md
  const statusContent = `# ${d.statusTitle}

${navStatus}

> **${d.statusDesc}**  
> ${quickNavStatus}

---

## 1. ${d.categoryHeaders[0]}

### vibeside-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['vibeside-mcp']}\`
- **${d.fieldLabels.target}**: Node.js >= 20.0.0 / Standalone Native Binary
- **${d.fieldLabels.proto}**: Model Context Protocol (MCP) v1.0
- **${d.fieldLabels.telem}**: FastMCP Direct IPC / CDP Port 9315
- **${d.fieldLabels.feat}**: ${d.matrix[0][4]}

### omnibrowse
- **${d.fieldLabels.version}**: \`${VERSION_MAP['omnibrowse']}\`
- **${d.fieldLabels.target}**: Rust 1.80+ (Dual-Core Engine)
- **${d.fieldLabels.feat}**: ${d.matrix[7][4]}

---

## 2. ${d.categoryHeaders[1]}

### remote-auto-ai-worker
- **${d.fieldLabels.version}**: \`${VERSION_MAP['remote-auto-ai-worker']}\`
- **${d.fieldLabels.target}**: TypeScript Serverless Gateway
- **${d.fieldLabels.feat}**: ${d.matrix[8][4]}

### vulnforge-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['vulnforge-mcp']}\`
- **${d.fieldLabels.target}**: Static & Dynamic Forensic Engine
- **${d.fieldLabels.feat}**: ${d.matrix[3][4]}

### binvibe
- **${d.fieldLabels.version}**: \`${VERSION_MAP['binvibe']}\`
- **${d.fieldLabels.target}**: Rust Native PE/ELF Decompiler Bridge
- **${d.fieldLabels.feat}**: ${d.matrix[1][4]}

---

## 3. ${d.categoryHeaders[2]}

### omni-control-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['omni-control-mcp']}\`
- **${d.fieldLabels.target}**: TypeScript Orchestrator
- **${d.fieldLabels.feat}**: ${d.matrix[6][4]}

### netvibe
- **${d.fieldLabels.version}**: \`${VERSION_MAP['netvibe']}\`
- **${d.fieldLabels.target}**: C/Rust Native Low-Level Engine
- **${d.fieldLabels.feat}**: ${d.matrix[2][4]}

### webarcheology-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['webarcheology-mcp']}\`
- **${d.fieldLabels.target}**: TypeScript Forensics Engine
- **${d.fieldLabels.feat}**: ${d.matrix[4][4]}

### vidcompact-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['vidcompact-mcp']}\`
- **${d.fieldLabels.target}**: C++/Node.js Media Pipeline
- **${d.fieldLabels.feat}**: ${d.matrix[9][4]}

### omni-audio-mcp
- **${d.fieldLabels.version}**: \`${VERSION_MAP['omni-audio-mcp']}\`
- **${d.fieldLabels.target}**: WebAudio / Native DSP Engine
- **${d.fieldLabels.feat}**: ${d.matrix[5][4]}
`;

  // 3. CHANGELOG.md
  const changelogContent = `# ${d.changelogTitle}

${navChangelog}

> **${d.changelogDesc}**  
> ${quickNavChangelog}

---

## [2026-10-27] — Milestone 2026.Q4

### vibeside-mcp (${VERSION_MAP['vibeside-mcp']})
- **${d.featureLabel}**: ${d.matrix[0][4]}

### binvibe (${VERSION_MAP['binvibe']})
- **${d.featureLabel}**: ${d.matrix[1][4]}

### netvibe (${VERSION_MAP['netvibe']})
- **${d.featureLabel}**: ${d.matrix[2][4]}

### vulnforge-mcp (${VERSION_MAP['vulnforge-mcp']})
- **${d.featureLabel}**: ${d.matrix[3][4]}

### webarcheology-mcp (${VERSION_MAP['webarcheology-mcp']})
- **${d.featureLabel}**: ${d.matrix[4][4]}

### omni-audio-mcp (${VERSION_MAP['omni-audio-mcp']})
- **${d.featureLabel}**: ${d.matrix[5][4]}

### omni-control-mcp (${VERSION_MAP['omni-control-mcp']})
- **${d.featureLabel}**: ${d.matrix[6][4]}

### omnibrowse (${VERSION_MAP['omnibrowse']})
- **${d.featureLabel}**: ${d.matrix[7][4]}

### remote-auto-ai-worker (${VERSION_MAP['remote-auto-ai-worker']})
- **${d.featureLabel}**: ${d.matrix[8][4]}

### vidcompact-mcp (${VERSION_MAP['vidcompact-mcp']})
- **${d.featureLabel}**: ${d.matrix[9][4]}
`;

  return { readmeContent, statusContent, changelogContent };
}

if (!isVerifyOnly) {
  // 1. Generate for all 12 languages under docs/locales/<lang>/
  LANGS.forEach(lang => {
    const targetDir = path.join(LOCALES_DIR, lang.code);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const d = LOCALIZED_CONTENT[lang.code] || LOCALIZED_CONTENT.en;
    const navReadme = generateNavTable('locale', lang.code, 'README.md');
    const navStatus = generateNavTable('locale', lang.code, 'STATUS.md');
    const navChangelog = generateNavTable('locale', lang.code, 'CHANGELOG.md');

    const quickNavReadme = `🔗 **Web Showcase**: [https://krc-labs.github.io/](https://krc-labs.github.io/) | 🏠 **[Repo Root](../../../README.md)** | 📊 **[STATUS.md](./STATUS.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**`;
    const quickNavStatus = `🔗 **${d.navLabel}**: 🏠 **[Repo Root](../../../README.md)** | 📄 **[README.md](./README.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**`;
    const quickNavChangelog = `🔗 **${d.navLabel}**: 🏠 **[Repo Root](../../../README.md)** | 📄 **[README.md](./README.md)** | 📊 **[STATUS.md](./STATUS.md)**`;

    const bundle = buildDocBundle(d, navReadme, navStatus, navChangelog, quickNavReadme, quickNavStatus, quickNavChangelog);

    fs.writeFileSync(path.join(targetDir, 'README.md'), bundle.readmeContent, 'utf8');
    fs.writeFileSync(path.join(targetDir, 'STATUS.md'), bundle.statusContent, 'utf8');
    fs.writeFileSync(path.join(targetDir, 'CHANGELOG.md'), bundle.changelogContent, 'utf8');
  });
  console.log('✓ Generated 12 localized bundles (36 files)');

  // 2. Generate root files (English default landing page)
  {
    const d = LOCALIZED_CONTENT.en;
    const navReadme = generateNavTable('root', 'en', 'README.md');
    const navStatus = generateNavTable('root', 'en', 'STATUS.md');
    const navChangelog = generateNavTable('root', 'en', 'CHANGELOG.md');

    const quickNavReadme = `🔗 **Web Showcase**: [https://krc-labs.github.io/](https://krc-labs.github.io/) | 📊 **Status Portal**: [STATUS.md](./STATUS.md) | 📋 **Changelog**: [CHANGELOG.md](./CHANGELOG.md)`;
    const quickNavStatus = `🔗 **Quick Navigation**: 📄 [README.md](./README.md) | 📋 [CHANGELOG.md](./CHANGELOG.md)`;
    const quickNavChangelog = `🔗 **Quick Navigation**: 📄 [README.md](./README.md) | 📊 [STATUS.md](./STATUS.md)`;

    const bundle = buildDocBundle(d, navReadme, navStatus, navChangelog, quickNavReadme, quickNavStatus, quickNavChangelog);

    fs.writeFileSync(path.join(STATUS_ROOT, 'README.md'), bundle.readmeContent, 'utf8');
    fs.writeFileSync(path.join(STATUS_ROOT, 'STATUS.md'), bundle.statusContent, 'utf8');
    fs.writeFileSync(path.join(STATUS_ROOT, 'CHANGELOG.md'), bundle.changelogContent, 'utf8');
  }
  console.log('✓ Generated root files (3 files)');

  // 3. Generate docs/ directory files (English fallback mirror for docs/README.md)
  {
    const d = LOCALIZED_CONTENT.en;
    const navReadme = generateNavTable('docs', 'en', 'README.md');
    const navStatus = generateNavTable('docs', 'en', 'STATUS.md');
    const navChangelog = generateNavTable('docs', 'en', 'CHANGELOG.md');

    const quickNavReadme = `🔗 **Web Showcase**: [https://krc-labs.github.io/](https://krc-labs.github.io/) | 🏠 **[Repo Root](../README.md)** | 📊 **[STATUS.md](./STATUS.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**`;
    const quickNavStatus = `🔗 **Quick Navigation**: 🏠 **[Repo Root](../README.md)** | 📄 **[README.md](./README.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**`;
    const quickNavChangelog = `🔗 **Quick Navigation**: 🏠 **[Repo Root](../README.md)** | 📄 **[README.md](./README.md)** | 📊 **[STATUS.md](./STATUS.md)**`;

    const bundle = buildDocBundle(d, navReadme, navStatus, navChangelog, quickNavReadme, quickNavStatus, quickNavChangelog);

    fs.writeFileSync(path.join(DOCS_DIR, 'README.md'), bundle.readmeContent, 'utf8');
    fs.writeFileSync(path.join(DOCS_DIR, 'STATUS.md'), bundle.statusContent, 'utf8');
    fs.writeFileSync(path.join(DOCS_DIR, 'CHANGELOG.md'), bundle.changelogContent, 'utf8');
  }
  console.log('✓ Generated docs/ mirror files (3 files)');
}

// 4. Exhaustive Relative Link Validation Sweep across ALL files
console.log('\n--- Exhaustive Relative Link Verification Sweep ---');
function getAllMdFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== '.git') getAllMdFiles(fullPath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

const allMdFiles = getAllMdFiles(STATUS_ROOT);
let totalLinksChecked = 0;
let errorsFound = 0;

allMdFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const dirName = path.dirname(filePath);
  const relFilePath = path.relative(STATUS_ROOT, filePath);

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkText = match[1];
    const linkUrl = match[2];

    if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) continue;

    totalLinksChecked++;
    const cleanUrl = linkUrl.split('#')[0].split('?')[0];
    if (!cleanUrl) continue;

    const targetFullPath = path.resolve(dirName, cleanUrl);
    if (!fs.existsSync(targetFullPath)) {
      console.error(`❌ BROKEN LINK in [${relFilePath}]: "${linkText}" -> "${linkUrl}" (Resolved: ${targetFullPath})`);
      errorsFound++;
    }
  }
});

console.log(`Checked ${totalLinksChecked} internal relative links.`);
if (errorsFound > 0) {
  console.error(`💥 Verification FAILED: ${errorsFound} broken links detected!`);
  process.exit(1);
} else {
  console.log(`✅ Verification PASSED: 100% of internal links resolve to valid on-disk files with ZERO broken paths!`);
}
