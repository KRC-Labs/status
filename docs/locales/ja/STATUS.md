# 📊 KRC Labs システム詳細互換性＆技術仕様レジストリ

| [KR 한국어](../ko/STATUS.md) | [US English](../../STATUS.md) | [JP 日本語](./STATUS.md) | [CN 简体中文](../zh-CN/STATUS.md) | [ES Español](../es/STATUS.md) | [IN हिन्दी](../hi/STATUS.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](../fr/STATUS.md) | [DE Deutsch](../de/STATUS.md) | [RU Русский](../ru/STATUS.md) | [BR Português](../pt-BR/STATUS.md) | [IT Italiano](../it/STATUS.md) | [SA العربية](../ar/STATUS.md) |

> **KRC Labsの10大分散システムにおけるアーキテクチャ仕様、ランタイム互換性、およびコア機能レジストリです。**  
> 🔗 **クイックナビゲーション**: [README.md](./README.md) | 📋 [CHANGELOG.md](./CHANGELOG.md)

---

## 1. ランタイム＆開発ツール群

### vibeside-mcp
- **現在バージョン**: `v0.30.0`
- **ランタイムターゲット**: Node.js >= 20.0.0 / Standalone Native Binary
- **プロトコル**: Model Context Protocol (MCP) v1.0
- **テレメトリ**: FastMCP Direct IPC / CDP Port 9315
- **主要機能**: クライアント側FPSテレメトリ監視＆GPUコンポジットレイヤインスペクタ

### omnibrowse
- **現在バージョン**: `v0.17.0`
- **ランタイムターゲット**: Rust 1.80+ (Dual-Core Engine)
- **主要機能**: インテリジェントHTTP/3＆QUIC高速トランスポートエンジン

---

## 2. 分散コンピューティング＆セキュリティ群

### remote-auto-ai-worker
- **現在バージョン**: `v1.15.0`
- **ランタイムターゲット**: TypeScript Serverless Gateway
- **主要機能**: コンテンツセキュリティポリシー(CSP)＆動的SRIシンセサイザー

### vulnforge-mcp
- **現在バージョン**: `v1.25.0`
- **ランタイムターゲット**: Static & Dynamic Forensic Engine
- **主要機能**: 自動マイクロVM分離＆エフェメラルサンドボックス構成認証ゲート

### binvibe
- **現在バージョン**: `v0.29.0`
- **ランタイムターゲット**: Rust Native PE/ELF Decompiler Bridge
- **主要機能**: バイナリエントロピー滝＆マイクロテクスチャ可視化エンジン

---

## 3. ネットワーク、制御プレーン＆メディア群

### omni-control-mcp
- **現在バージョン**: `v1.13.0`
- **ランタイムターゲット**: TypeScript Orchestrator
- **主要機能**: ゼロトラストPKI CAおよび28コアMCPツール搭載mTLSメッシュ

### netvibe
- **現在バージョン**: `v0.5.0`
- **ランタイムターゲット**: C/Rust Native Low-Level Engine
- **主要機能**: 自律型BGP-4およびOSPFv2/OSPFv3制御プレーンプロトコルフォレンジック

### webarcheology-mcp
- **現在バージョン**: `v1.14.0`
- **ランタイムターゲット**: TypeScript Forensics Engine
- **主要機能**: クライアント側セキュリティヘッダー＆CSPバイパスシミュレータ

### vidcompact-mcp
- **現在バージョン**: `v1.11.0`
- **ランタイムターゲット**: C++/Node.js Media Pipeline
- **主要機能**: ハードウェアアクセラレーション対応2パス制約エンコード＆容量圧縮

### omni-audio-mcp
- **現在バージョン**: `v1.0.0`
- **ランタイムターゲット**: WebAudio / Native DSP Engine
- **主要機能**: 512バンドFFT高精度オーディオスペクトラムテレメトリ
