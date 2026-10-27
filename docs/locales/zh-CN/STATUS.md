# 📊 KRC Labs 系统详细兼容性与技术规范注册表

| [KR 한국어](../ko/STATUS.md) | [US English](../en/STATUS.md) | [JP 日本語](../ja/STATUS.md) | [CN 简体中文](./STATUS.md) | [ES Español](../es/STATUS.md) | [IN हिन्दी](../hi/STATUS.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](../fr/STATUS.md) | [DE Deutsch](../de/STATUS.md) | [RU Русский](../ru/STATUS.md) | [BR Português](../pt-BR/STATUS.md) | [IT Italiano](../it/STATUS.md) | [SA العربية](../ar/STATUS.md) |

> **KRC Labs 10 大分布式系统的架构规范、运行兼容性和核心功能详细规范。**  
> 🔗 **快速导航**: 🏠 **[Repo Root](../../../README.md)** | 📄 **[README.md](./README.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**

---

## 1. 运行时与开发者工具群

### vibeside-mcp
- **当前版本**: `v0.33.0`
- **运行时目标**: Node.js >= 20.0.0 / Standalone Native Binary
- **协议标准**: Model Context Protocol (MCP) v1.0
- **遥测引擎**: FastMCP Direct IPC / CDP Port 9315
- **核心特性**: 客户端 FPS 遥测观察器与 GPU 合成图层检查器

### omnibrowse
- **当前版本**: `v0.22.0`
- **运行时目标**: Rust 1.80+ (Dual-Core Engine)
- **核心特性**: 智能 HTTP/3 与 QUIC 高速传输引擎

---

## 2. 分布式计算与安全系统群

### remote-auto-ai-worker
- **当前版本**: `v1.20.0`
- **运行时目标**: TypeScript Serverless Gateway
- **核心特性**: 内容安全策略 (CSP) 与动态 SRI 综合合成器

### vulnforge-mcp
- **当前版本**: `v1.29.0`
- **运行时目标**: Static & Dynamic Forensic Engine
- **核心特性**: 自动化微虚拟机隔离与临时沙箱证明网关

### binvibe
- **当前版本**: `v0.29.0`
- **运行时目标**: Rust Native PE/ELF Decompiler Bridge
- **核心特性**: 自动化二进制熵瀑布图与微纹理可视化引擎

---

## 3. 网络、控制平面与媒体引擎群

### omni-control-mcp
- **当前版本**: `v1.15.0`
- **运行时目标**: TypeScript Orchestrator
- **核心特性**: 零信任 PKI CA 与具备 28 个核心 MCP 工具的 mTLS 网格

### netvibe
- **当前版本**: `v0.5.0`
- **运行时目标**: C/Rust Native Low-Level Engine
- **核心特性**: 自主 BGP-4 与 OSPFv2/OSPFv3 控制平面协议取证引擎

### webarcheology-mcp
- **当前版本**: `v1.14.0`
- **运行时目标**: TypeScript Forensics Engine
- **核心特性**: 客户端安全标头与 CSP 绕过模拟器

### vidcompact-mcp
- **当前版本**: `v1.11.0`
- **运行时目标**: C++/Node.js Media Pipeline
- **核心特性**: 硬件加速双遍约束编码与目标容量精准压缩

### omni-audio-mcp
- **当前版本**: `v1.0.0`
- **运行时目标**: WebAudio / Native DSP Engine
- **核心特性**: 512 频段 FFT 高精度音频频谱遥测
