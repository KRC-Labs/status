# 📊 KRC Labs 시스템 상세 호환성 및 기술 명세 레지스트리

| [KR 한국어](./STATUS.md) | [US English](../en/STATUS.md) | [JP 日本語](../ja/STATUS.md) | [CN 简体中文](../zh-CN/STATUS.md) | [ES Español](../es/STATUS.md) | [IN हिन्दी](../hi/STATUS.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](../fr/STATUS.md) | [DE Deutsch](../de/STATUS.md) | [RU Русский](../ru/STATUS.md) | [BR Português](../pt-BR/STATUS.md) | [IT Italiano](../it/STATUS.md) | [SA العربية](../ar/STATUS.md) |

> **KRC Labs 10대 핵심 분산 시스템의 아키텍처 스펙, 런타임 호환성 및 세부 기술 사양 레지스트리입니다.**  
> 🔗 **빠른 이동**: 🏠 **[Repo Root](../../../README.md)** | 📄 **[README.md](./README.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**

---

## 1. 런타임 및 개발자 도구군

### vibeside-mcp
- **현재 버전**: `v0.33.0`
- **런타임 타깃**: Node.js >= 20.0.0 / Standalone Native Binary
- **프로토콜**: Model Context Protocol (MCP) v1.0
- **텔레메트리**: FastMCP Direct IPC / CDP Port 9315
- **핵심 기능**: 클라이언트 FPS 텔레메트리 관측기 & GPU 컴포지팅 레이어 인스펙터

### omnibrowse
- **현재 버전**: `v0.22.0`
- **런타임 타깃**: Rust 1.80+ (Dual-Core Engine)
- **핵심 기능**: 지능형 HTTP/3 & QUIC 고속 트랜스포트 엔진

---

## 2. 분산 컴퓨팅 및 보안 시스템군

### remote-auto-ai-worker
- **현재 버전**: `v1.20.0`
- **런타임 타깃**: TypeScript Serverless Gateway
- **핵심 기능**: 콘텐츠 보안 정책(CSP) & 동적 SRI 종합 합성기

### vulnforge-mcp
- **현재 버전**: `v1.29.0`
- **런타임 타깃**: Static & Dynamic Forensic Engine
- **핵심 기능**: 자동화된 마이크로 VM 격리 & 임시 샌드박스 증명 게이트

### binvibe
- **현재 버전**: `v0.29.0`
- **런타임 타깃**: Rust Native PE/ELF Decompiler Bridge
- **핵심 기능**: 바이너리 엔트로피 폭포수 & 마이크로 텍스처 시각화 엔진

---

## 3. 네트워크, 제어 평면 및 미디어 엔진군

### omni-control-mcp
- **현재 버전**: `v1.15.0`
- **런타임 타깃**: TypeScript Orchestrator
- **핵심 기능**: 제로 트러스트 PKI CA & 28개 코어 MCP 도구 mTLS 메시

### netvibe
- **현재 버전**: `v0.5.0`
- **런타임 타깃**: C/Rust Native Low-Level Engine
- **핵심 기능**: 자율 BGP-4 및 OSPFv2/OSPFv3 제어 평면 포렌식 엔진

### webarcheology-mcp
- **현재 버전**: `v1.14.0`
- **런타임 타깃**: TypeScript Forensics Engine
- **핵심 기능**: 클라이언트 보안 헤더 & CSP 우회 시뮬레이터

### vidcompact-mcp
- **현재 버전**: `v1.11.0`
- **런타임 타깃**: C++/Node.js Media Pipeline
- **핵심 기능**: 하드웨어 가속 2패스 인코딩 & 목표 용량 압축

### omni-audio-mcp
- **현재 버전**: `v1.0.0`
- **런타임 타깃**: WebAudio / Native DSP Engine
- **핵심 기능**: 512 밴드 FFT 오디오 스펙트럼 텔레메트리
