# 🌐 KRC Labs — Public Engineering Updates & Systems Status

| [KR 한국어](./docs/locales/ko.md) | [US English](./README.md) | [JP 日本語](./docs/locales/ja.md) | [CN 简体中文](./docs/locales/zh-CN.md) | [ES Español](./docs/locales/es.md) | [IN हिन्दी](./docs/locales/hi.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](./docs/locales/fr.md) | [DE Deutsch](./docs/locales/de.md) | [RU Русский](./docs/locales/ru.md) | [BR Português](./docs/locales/pt-BR.md) | [IT Italiano](./docs/locales/it.md) | [SA العربية](./docs/locales/ar.md) |

> **Official Public Updates, Version Registry & Release Changelogs for KRC Labs Core Systems.**  
> This repository strictly tracks public build milestones, runtime versions, and architecture updates across our 10 distributed systems without exposing internal proprietary source trees.
>
> 🔗 **Web Showcase**: [https://krc-labs.github.io/](https://krc-labs.github.io/)  
> 📊 **Status Portal**: [STATUS.md](./STATUS.md) | 📋 **Changelog**: [CHANGELOG.md](./CHANGELOG.md) | 📄 **License**: [LICENSE](./LICENSE)

---

## 📦 Core Systems Status Matrix

| System | Domain | Current Version | Health / Status | Latest Public Milestone |
| :--- | :---: | :---: | :---: | :--- |
| **vibeside-mcp** | Runtime / DevTools | `v0.30.0` | 🟢 Stable | Client-side FPS telemetry & GPU compositing layer inspector |
| **binvibe** | Reverse Engineering | `v0.29.0` | 🟢 Stable | Binary entropy waterfall & micro-texture visualizer |
| **netvibe** | Network Forensics | `v0.5.0` | 🟢 Stable | Autonomous BGP-4 & OSPFv2/OSPFv3 control-plane forensics |
| **vulnforge-mcp** | Security Auditing | `v1.25.0` | 🟢 Stable | Micro-VM isolation & ephemeral sandbox attestation gate |
| **webarcheology-mcp** | Web Forensics | `v1.14.0` | 🟢 Stable | Client-side security header & CSP bypass simulator |
| **omni-audio-mcp** | Audio Engine | `v1.0.0` | 🟢 Stable | 512-band FFT audio spectrum telemetry |
| **omni-control-mcp** | Orchestration | `v1.13.0` | 🟢 Stable | Zero-Trust PKI CA & mTLS Mesh with 28 core MCP tools |
| **omnibrowse** | Browser Engine | `v0.17.0` | 🟢 Stable | Intelligent HTTP/3 & QUIC transport engine |
| **remote-auto-ai-worker** | Edge Computing | `v1.15.0` | 🟢 Stable | Content Security Policy & Dynamic SRI Synthesizer |
| **vidcompact-mcp** | Media Encoding | `v1.11.0` | 🟢 Stable | Constrained two-pass encoding & target-size hardware acceleration |

---

## 🔒 Source Code Isolation Guarantee
All proprietary source trees (`src/`, `crates/`, `tests/`, business logic, internal scripts) remain **100% strictly private** in internal organization repositories.  
This public registry receives strictly audited metadata and version changelogs via automated verification gates.
