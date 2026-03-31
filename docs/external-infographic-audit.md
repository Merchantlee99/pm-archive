# 외부 인포그래픽 적용 검토

가정:
- 이번 라운드는 23편 전체가 아니라 6편만 우선 적용한다.
- 재사용 안전성이 모호한 상업 블로그·기업 마케팅 이미지는 제외한다.
- 적용 기준은 `이미지 존재 여부`, `직접 다운로드 가능 여부`, `재사용 안전성`이 모두 확인된 경우다.

## 적용한 후보

| 글 | 적용 자료 | 출처 | 이미지 존재 여부 | 직접 다운로드 가능 여부 | 재사용 안전성 | 비고 |
| --- | --- | --- | --- | --- | --- | --- |
| 문제 정의가 흔들릴 때 PM은 무엇을 다시 봐야 할까 | Double Diamond | Wikimedia Commons | 있음 | 가능 | 안전, CC0 1.0 | 문제 재정의 문맥과 직접 연결 |
| 성과가 나쁘면 사람보다 시스템을 먼저 본다 | The Iceberg | Wikimedia Commons | 있음 | 가능 | 사용 가능, CC BY 4.0 | 출처 표기 필요 |
| 모두의 의견보다 먼저 우선순위가 정렬돼야 한다 | Matrice d’Eisenhower | Wikimedia Commons | 있음 | 가능 | 사용 가능, CC BY-SA 4.0 | 출처·동일조건변경허락 표기 필요 |
| 시스템 설계는 복잡함을 감당하는 구조를 짜는 일이다 | Computer system architecture | Wikimedia Commons | 있음 | 가능 | 사용 가능, CC BY-SA 4.0 | 구조 연결을 더 직관적으로 보여줌 |
| 좋은 제품은 스스로 팔리지 않는다 | The Purchase Funnel | Wikimedia Commons | 있음 | 가능 | 사용 가능, CC BY-SA 4.0 | 가치 전달과 전환 흐름을 더 직접적으로 보여줌 |
| PM의 역할은 문서를 만드는 일이 아니라 개발 생애 주기를 연결하는 일이다 | Service blueprint | Wikimedia Commons | 있음 | 가능 | 사용 가능, CC BY-SA 4.0 | 단계 연결과 운영 구조를 같이 보여줌 |

## 이번에 제외한 후보

- Product Talk / Opportunity Solution Tree  
  이유: 공식 사이트 자료지만 이미지 재배포 허용 범위가 명확하지 않음
- ProdPad / Now-Next-Later  
  이유: 예시 이미지는 있으나 직접 재업로드 안전성 판단이 애매함
- Qualtrics / VOC 운영 프레임워크  
  이유: 기업 블로그 이미지 재사용 범위가 불명확함
- Intercom / JTBD forces  
  이유: 기사 내 인포그래픽은 있으나 라이선스가 명시적이지 않음
- web.dev / Core Web Vitals  
  이유: 페이지 전체는 CC BY 4.0이지만, 이번 라운드는 Wikimedia Commons처럼 파일 단위 라이선스가 분명한 후보부터 우선 적용

## 적용 메모

- 모든 이미지 파일은 `public/article-visuals/`에 로컬 보관
- 글 상세에서만 노출
- 이미지 아래에 캡션과 `Source + License`를 함께 표기
- 이전 자체 제작 인포그래픽 구현은 제거
