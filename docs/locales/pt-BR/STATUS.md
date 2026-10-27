# 📊 KRC Labs Registro de Compatibilidade e Especificações Técnicas

| [KR 한국어](../ko/STATUS.md) | [US English](../en/STATUS.md) | [JP 日本語](../ja/STATUS.md) | [CN 简体中文](../zh-CN/STATUS.md) | [ES Español](../es/STATUS.md) | [IN हिन्दी](../hi/STATUS.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](../fr/STATUS.md) | [DE Deutsch](../de/STATUS.md) | [RU Русский](../ru/STATUS.md) | [BR Português](./STATUS.md) | [IT Italiano](../it/STATUS.md) | [SA العربية](../ar/STATUS.md) |

> **Especificações arquitetônicas detalhadas, compatibilidade de runtime e registro de recursos dos 10 sistemas.**  
> 🔗 **Navegação Rápida**: 🏠 **[Repo Root](../../../README.md)** | 📄 **[README.md](./README.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**

---

## 1. Sistemas de Execução e Ferramentas Dev

### vibeside-mcp
- **Versão Atual**: `v0.33.0`
- **Alvo de Execução**: Node.js >= 20.0.0 / Standalone Native Binary
- **Protocolo**: Model Context Protocol (MCP) v1.0
- **Telemetria**: FastMCP Direct IPC / CDP Port 9315
- **Recursos Principais**: Telemetria FPS no cliente & inspetor de camadas GPU

### omnibrowse
- **Versão Atual**: `v0.22.0`
- **Alvo de Execução**: Rust 1.80+ (Dual-Core Engine)
- **Recursos Principais**: Motor de transporte inteligente HTTP/3 & QUIC

---

## 2. Sistemas Distribuídos e de Segurança

### remote-auto-ai-worker
- **Versão Atual**: `v1.20.0`
- **Alvo de Execução**: TypeScript Serverless Gateway
- **Recursos Principais**: Política de segurança de conteúdo (CSP) & sintetizador SRI

### vulnforge-mcp
- **Versão Atual**: `v1.29.0`
- **Alvo de Execução**: Static & Dynamic Forensic Engine
- **Recursos Principais**: Isolamento de micro-VM & gateway de sandbox efêmero

### binvibe
- **Versão Atual**: `v0.29.0`
- **Alvo de Execução**: Rust Native PE/ELF Decompiler Bridge
- **Recursos Principais**: Cascata de entropia binária & visualizador de microtexturas

---

## 3. Motores de Rede, Plano de Controle e Mídia

### omni-control-mcp
- **Versão Atual**: `v1.15.0`
- **Alvo de Execução**: TypeScript Orchestrator
- **Recursos Principais**: Zero-Trust PKI CA & malha mTLS com 28 ferramentas MCP

### netvibe
- **Versão Atual**: `v0.5.0`
- **Alvo de Execução**: C/Rust Native Low-Level Engine
- **Recursos Principais**: Forense de protocolos de controle autônomo BGP-4 e OSPF

### webarcheology-mcp
- **Versão Atual**: `v1.14.0`
- **Alvo de Execução**: TypeScript Forensics Engine
- **Recursos Principais**: Cabeçalhos de segurança do cliente & simulador de desvio de CSP

### vidcompact-mcp
- **Versão Atual**: `v1.11.0`
- **Alvo de Execução**: C++/Node.js Media Pipeline
- **Recursos Principais**: Codificação acelerada por hardware em duas etapas

### omni-audio-mcp
- **Versão Atual**: `v1.0.0`
- **Alvo de Execução**: WebAudio / Native DSP Engine
- **Recursos Principais**: Telemetria de espectro de áudio FFT de 512 bandas
