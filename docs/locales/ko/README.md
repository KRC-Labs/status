# 🌐 KRC Labs — 시스템 공개 운영 현황 및 릴리스 매트릭스

| [KR 한국어](./README.md) | [US English](../en/README.md) | [JP 日本語](../ja/README.md) | [CN 简体中文](../zh-CN/README.md) | [ES Español](../es/README.md) | [IN हिन्दी](../hi/README.md) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [FR Français](../fr/README.md) | [DE Deutsch](../de/README.md) | [RU Русский](../ru/README.md) | [BR Português](../pt-BR/README.md) | [IT Italiano](../it/README.md) | [SA العربية](../ar/README.md) |

> **KRC Labs 10대 핵심 분산 시스템의 공식 공개 업데이트, 런타임 버전 레지스트리 및 릴리스 변경 이력입니다. 사내 독점 소스코드는 100% 비공개로 안전하게 보호됩니다.**  
> 🔗 **Web Showcase**: [https://krc-labs.github.io/](https://krc-labs.github.io/) | 🏠 **[Repo Root](../../../README.md)** | 📊 **[STATUS.md](./STATUS.md)** | 📋 **[CHANGELOG.md](./CHANGELOG.md)**

---

## 📦 핵심 시스템 운영 매트릭스

| 시스템명 | 도메인 분류 | 현재 버전 | 가동 상태 | 최신 공개 마일스톤 (핵심 기능) |
| :--- | :---: | :---: | :---: | :--- |
| **vibeside-mcp** | 런타임 / 개발도구 | `v0.33.0` | 🟢 정상 가동 | 클라이언트 FPS 텔레메트리 관측기 & GPU 컴포지팅 레이어 인스펙터 |
| **binvibe** | 리버스 엔지니어링 | `v0.29.0` | 🟢 정상 가동 | 바이너리 엔트로피 폭포수 & 마이크로 텍스처 시각화 엔진 |
| **netvibe** | 네트워크 포렌식 | `v0.5.0` | 🟢 정상 가동 | 자율 BGP-4 및 OSPFv2/OSPFv3 제어 평면 포렌식 엔진 |
| **vulnforge-mcp** | 보안 취약점 감사 | `v1.29.0` | 🟢 정상 가동 | 자동화된 마이크로 VM 격리 & 임시 샌드박스 증명 게이트 |
| **webarcheology-mcp** | 웹 포렌식 | `v1.14.0` | 🟢 정상 가동 | 클라이언트 보안 헤더 & CSP 우회 시뮬레이터 |
| **omni-audio-mcp** | 오디오 엔진 | `v1.0.0` | 🟢 정상 가동 | 512 밴드 FFT 오디오 스펙트럼 텔레메트리 |
| **omni-control-mcp** | 제어 평면 | `v1.15.0` | 🟢 정상 가동 | 제로 트러스트 PKI CA & 28개 코어 MCP 도구 mTLS 메시 |
| **omnibrowse** | 브라우저 엔진 | `v0.22.0` | 🟢 정상 가동 | 지능형 HTTP/3 & QUIC 고속 트랜스포트 엔진 |
| **remote-auto-ai-worker** | 에지 컴퓨팅 | `v1.20.0` | 🟢 정상 가동 | 콘텐츠 보안 정책(CSP) & 동적 SRI 종합 합성기 |
| **vidcompact-mcp** | 미디어 인코딩 | `v1.11.0` | 🟢 정상 가동 | 하드웨어 가속 2패스 인코딩 & 목표 용량 압축 |


---

## 🔒 소스코드 보안 및 지적재산권(IP) 보호
모든 핵심 소스코드 트리(`src/`, `crates/`, `tests/`)는 사내 비공개 저장소에 100% 엄격 격리 보관됩니다. 본 공개 레지스트리는 사전 검증된 버전 메타데이터와 릴리스 정보만을 안전하게 제공합니다.
