# Global K-Culture Elite Program Landing Page — Design Spec

## Overview

Bada BLI가 동양대학교와 독점 계약으로 운영하는 "Global K-Culture Elite Program"의 학생 모집 랜딩 페이지. badabli.com 하위 페이지로 추가하며, 오디션 참가비 결제(Stripe)까지 원스톱으로 처리한다.

## Business Context

- **프로그램**: 동양대학교 4년제 학위 + K-Culture 실무 훈련 (오디션 기반)
- **Bada BLI 역할**: 해외 독점 모집 대행 — 홍보, 참가 접수, 참가비 수금, 오디션 장소 제공
- **수익**: 참가비 $20 USD/인
- **타겟**: 동남아/전 세계 10대 후반~20대 초반 K-Culture 관심 학생
- **이해관계자**: 학생(전환 대상), 부모(학비 결정권자), 동양대(파트너 — 전문성 인식 필요)

## Page Location

- URL: `badabli.com/k-culture.html`
- 메인 네비게이션에 추가

## Design System

### Color Palette

| 역할 | 색상 | 용도 |
|------|------|------|
| Background Primary | `#0A0A0A` | 메인 배경 |
| Background Secondary | `#111111` | 섹션 교차 배경 |
| Brand Blue | `#23508e` | Bada BLI 브랜드 연결 |
| Neon Accent | TBD (형광 핑크 또는 퍼플) | CTA, 강조 요소 |
| Text Primary | `#FFFFFF` | 헤딩, 주요 텍스트 |
| Text Secondary | `rgba(255,255,255,0.7)` | 본문, 설명 텍스트 |
| Text Muted | `rgba(255,255,255,0.4)` | 보조 텍스트 |

### Typography

| 요소 | 폰트 | 크기 | 비고 |
|------|------|------|------|
| H1 (Hero) | Playfair Display or Inter Black | 4rem~6rem | SM 스타일 초대형 |
| H2 (섹션 타이틀) | Inter Bold | 2.5rem~3rem | 볼드, 트래킹 넓게 |
| Body | Inter Regular/Light | 1rem~1.125rem | 가독성 우선 |
| CTA 버튼 | Inter Semibold | 1rem | 대문자, 트래킹 넓게 |

### Components

| 컴포넌트 | 스타일 |
|----------|--------|
| 버튼 Primary | Pill shape (border-radius: 9999px), 네온 악센트 배경, 흰색 텍스트 |
| 버튼 Secondary | Pill shape, 투명 배경, 흰색 보더, 흰색 텍스트 |
| 카드 | 다크 그레이 배경(#1A1A1A), 미세 보더(rgba(255,255,255,0.1)), hover 시 글로우 |
| 파트너 로고 | 그레이스케일 → hover 시 컬러, 또는 흰색 SVG |
| 카운트다운 | 큰 숫자 + 네온 악센트, Days/Hours/Minutes/Seconds |

### Design References

한국 엔터 기획사 디자인 언어 참조:
- **HYBE**: 다크 배경 + 네온 악센트(#F5FF00), 둥근 버튼(45px), 모던 느낌
- **SM**: 초대형 타이포(H1 100px), 둥근 버튼(20px), AUDITION CTA 강조
- **JYP**: 미니멀, 각진 버튼, 볼드 톤
- **YG**: 블랙 + 레드/골드 악센트, 고급스러운 느낌

기술 스택은 기존 Bada BLI 사이트와 동일하게 유지 (정적 HTML + Tailwind + GSAP).

## Section Structure (10 Sections)

### 1. Hero
- **목적**: Attention — 첫 3초 안에 시선 사로잡기
- **구성**:
  - 배경: K-Pop 댄스 이미지 (추후 6~10초 무한루프 영상으로 교체)
  - 현재 이미지: `bada bli hero sample pic.png`
  - 오버레이: 그라데이션 (하단 → 블랙 페이드)
  - 타이틀: "GLOBAL K-CULTURE ELITE PROGRAM"
  - 서브타이틀: "From Global Audition to Global Stage"
  - CTA 버튼: "APPLY NOW" → #apply 섹션으로 스크롤
  - 상단: Bada BLI + 동양대 로고
- **영상 교체 시**: `<video autoplay muted loop playsinline>` 태그 사용, poster 속성으로 이미지 대체

### 2. Industry Partners
- **목적**: Trust — 즉시 신뢰 확보
- **구성**:
  - 섹션 타이틀: "Industry Partners"
  - 8개 파트너 로고: SM, YG, JYP, HYBE, ADOR, The Black Label, Starship, Pledis
  - 로고 스타일: 흰색/그레이스케일, 가로 스크롤 또는 그리드
  - 협업 방식 요약: Field Training / Internship / Joint R&D (아이콘 + 짧은 설명)
- **비고**: 로고는 실제 회사 로고 사용 시 저작권 확인 필요. 텍스트 기반 대체 가능

### 3. Program Overview
- **목적**: Interest — 프로그램의 핵심 가치 전달
- **구성**:
  - 타이틀: "4-Year Degree. 5 Industry Tracks. 1 Global Stage."
  - 부제: 오디션 기반 학위 + 실무 훈련 프로그램 설명 (2~3줄)
  - 핵심 수치 카드 3개: "4 Years" / "5 Tracks" / "8+ Partners"
  - CTA: "Explore Tracks" → #tracks 섹션으로 스크롤

### 4. Director's Message
- **목적**: Social Proof — 인간적 신뢰 구축
- **구성**:
  - 디렉터 사진 (Ricky Lee — 기존 `New Ricky Lee PIC.png` 활용)
  - 이름/직함
  - 인용문 (기존 index.html 디렉터 메시지와 유사한 톤, K-Culture 맥락으로 작성)
  - 추후 동양대 관계자 메시지로 변경 가능하게 구조화

### 5. 5 Tracks
- **목적**: Interest 심화 — 자신에게 맞는 트랙 발견
- **구성**:
  - 탭 UI 또는 카드 그리드 (5개)
  - 각 트랙: 아이콘 + 트랙 이름 + 2~3줄 설명 + 주요 과목/스킬
  - 트랙 목록:
    1. K-Pop Business — 아티스트 매니지먼트, 팬덤 비즈니스, 글로벌 프로덕션
    2. K-Performance — 콘서트 기획, 무대 제작, 퍼포먼스 브랜딩
    3. K-Beauty Business — 글로벌 뷰티 마케팅, 이커머스, 브랜드 런칭
    4. K-Fusion Media & Content — 콘텐츠 기획, SNS 마케팅, 유튜브 비즈니스
    5. Global Entertainment Startup — 비즈니스 모델링, IP, 플랫폼 창업
  - 4-Year Roadmap을 트랙 하단에 타임라인으로 통합 표시:
    Year 1 Fundamentals → Year 2 Exploration → Year 3 Deepening → Year 4 Career Entry

### 6. Career Safety Net
- **목적**: Desire — 불안 해소, "졸업 후 뭐 하지?" 해결
- **구성**:
  - 타이틀: "Your Career, Guaranteed"
  - 3개 Plan 카드 (가로 배치, 모바일은 세로):
    - Plan A — Direct Entry: 한국 주요 에이전시 취업 (A&R, 매니저, PD)
    - Plan B — Global Expansion: 해외 지사 취업 또는 자체 엔터 사업 런칭
    - Plan C — Academic Path: 대학원 진학 (Arts Management) 또는 문화기관
  - 하단 메시지: "No graduate is left without direction."

### 7. Scholarship
- **목적**: Desire 강화 + 부모 설득
- **구성**:
  - 타이틀: "Invest in Your Future"
  - 핵심 수치: "Up to 100% Tuition Waiver" (대형 타이포)
  - 장학금 세부: 4년 전액 지원 가능, 오디션 성적 기반
  - 부모 대상 메시지: 공인된 4년제 학위 + 산업 파트너 취업 보장 강조

### 8. FAQ
- **목적**: 이탈 방지 — 결제 전 마지막 의문 해소
- **구성**:
  - 아코디언 UI (클릭하면 펼쳐지는 Q&A)
  - 예상 질문:
    - 한국어를 못해도 지원할 수 있나요?
    - 비자는 어떻게 받나요?
    - 숙소는 제공되나요?
    - 참가비 $20는 환불 가능한가요?
    - 오디션은 어떤 형식인가요?
    - 온라인으로도 오디션을 볼 수 있나요?

### 9. Apply + Payment
- **목적**: Action — 전환 (결제)
- **구성**:
  - 타이틀: "Your Journey Starts Here"
  - 마감일 카운트다운 타이머: 2026년 5월 31일까지 (Days / Hours / Minutes / Seconds)
  - 지원 프로세스 4단계 시각화:
    1. Prepare — 3분 퍼포먼스 영상
    2. Pay — $20 USD 참가비 결제
    3. Submit — 온라인 폼 + 영상 제출
    4. Review — 심사 결과 통보
  - Stripe Checkout 버튼: "APPLY NOW — $20 USD"
  - 보안 배지: "Secure Payment by Stripe" 표시
  - 참고: 결제 완료 후 Google Form 또는 자체 폼으로 리다이렉트하여 상세 지원서 작성

### 10. Footer
- **구성**:
  - Bada BLI 로고 + 동양대 로고
  - 연락처: global@badaglobal-bli.com
  - 저작권: © 2026 Bada BLI x Dongyang University
  - SNS 링크 (있을 경우)

## Critical Constraints

### 1. 기존 페이지 무영향 (ABSOLUTE)
- `index.html`, `program.html` 등 기존 파일은 **절대 수정하지 않는다**
- `k-culture.html`은 완전히 독립된 새 파일이며, 기존 CSS/JS와 충돌 없어야 한다
- 네비게이션에 링크를 추가하는 것 외에 기존 파일 변경 없음

### 2. 완벽한 반응형 (ABSOLUTE)
- **모바일 퍼스트** 설계 — 모바일에서 먼저 완벽하게 작동한 후 데스크톱 확장
- 모든 섹션, 모든 컴포넌트가 320px~1920px 모든 뷰포트에서 정상 표시
- 히어로 영상/이미지: 모바일에서도 `object-fit: cover`로 풀스크린
- 텍스트 오버플로우 없음, 가로 스크롤 없음
- 터치 타겟 최소 48x48px (모바일 버튼/링크)
- Playwright로 PC/모바일 양쪽 테스트 필수

## Technical Architecture

### Stack
| 항목 | 선택 | 이유 |
|------|------|------|
| HTML | 정적 HTML (`k-culture.html`) | 기존 사이트와 동일 |
| CSS | Tailwind CSS (CDN) | 기존 사이트와 동일 |
| Animation | GSAP ScrollTrigger + cinematic 효과 | 스크롤 기반 섹션 등장 애니메이션 |
| Payment | Stripe Checkout (세션 기반) | 서버리스 결제, Cloudflare Worker로 세션 생성 |
| Video | `<video>` 태그 (autoplay, muted, loop, playsinline) | 히어로 배경 영상 |
| Countdown | 순수 JavaScript | 2026-05-31 마감 카운트다운 |
| Hosting | Cloudflare Pages (기존) | git push 자동 배포 |

### Stripe Integration

정적 HTML에서 Stripe Checkout을 사용하려면 서버 사이드에서 Checkout Session을 생성해야 한다. Cloudflare Worker를 활용:

1. `k-culture-payment` Cloudflare Worker 생성
2. Worker가 Stripe API를 호출하여 Checkout Session 생성
3. 프론트엔드에서 Worker 호출 → Stripe Checkout 페이지로 리다이렉트
4. 결제 성공 시 success URL로 리다이렉트 (감사 페이지)
5. 결제 실패 시 cancel URL로 리다이렉트 (원래 페이지)

### File Structure
```
/k-culture.html          — 메인 랜딩 페이지
/k-culture-success.html  — 결제 성공 감사 페이지
/bada bli hero sample pic.png — 히어로 이미지 (추후 영상으로 교체)
```

## Animation & Cinematic Effects

- 섹션 등장: GSAP ScrollTrigger로 fade-in + slide-up
- 파트너 로고: 순차 등장 또는 무한 스크롤 (marquee)
- 카운트다운: 숫자 플립 애니메이션
- 트랙 카드: hover 시 글로우 + 스케일 효과
- Hero: parallax 또는 Ken Burns 효과 (이미지일 때)

## Responsive Design

- 모바일 퍼스트
- 브레이크포인트: Tailwind 기본 (sm: 640px, md: 768px, lg: 1024px)
- 히어로 영상: 모바일에서도 동일 (object-fit: cover)
- 트랙 카드: 모바일에서 세로 스택
- 카운트다운: 2×2 그리드 (모바일)

## Content Notes

- 모든 텍스트는 영어 (타겟이 전 세계 학생)
- 디렉터 메시지는 추후 동양대 관계자로 교체 가능
- 파트너 로고는 텍스트 기반 대체 가능 (저작권 문제 시)
- 마감일은 추후 변경 가능 (카운트다운 타이머 날짜만 수정)
- 참가비 금액은 Stripe 대시보드에서 변경 가능

## Success Metrics

- 페이지 방문 → 결제 전환율
- Google Analytics로 추적 (기존 GA4 태그 적용)
- Stripe 대시보드에서 결제 건수/금액 확인
