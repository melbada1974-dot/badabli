# Bada BLI

## 스킬 라우팅

사용자의 요청이 사용 가능한 스킬과 일치하면, 반드시 Skill 도구를 사용하여
첫 번째 행동으로 해당 스킬을 호출할 것. 직접 답변하거나 다른 도구를 먼저 사용하지 말 것.
스킬에는 즉흥적 답변보다 더 나은 결과를 내는 전문 워크플로우가 있음.

주요 라우팅 규칙:
- 제품 아이디어, "이거 만들 가치 있어?", 브레인스토밍 → office-hours 호출
- 버그, 에러, "왜 안 돼?", 500 에러 → investigate 호출
- 배포, 디플로이, 푸시, PR 생성 → ship 호출
- QA, 사이트 테스트, 버그 찾기 → qa 호출
- 코드 리뷰, diff 확인 → review 호출
- 배포 후 문서 업데이트 → document-release 호출
- 주간 회고 → retro 호출
- 디자인 시스템, 브랜드 → design-consultation 호출
- 시각적 감사, 디자인 다듬기 → design-review 호출
- 아키텍처 리뷰 → plan-eng-review 호출
- 진행 상황 저장, 체크포인트, 재개 → checkpoint 호출
- 코드 품질, 상태 점검 → health 호출
