# wanted_pre_onboarding

## ERD
![image](https://user-images.githubusercontent.com/65072611/196462419-2bbd2b49-5172-4b3c-847b-9219f051c384.png)

## 구현 과정
1. 기업, 공고, 유저, 지원 목록 총 4개의 테이블을 구성
2. 기업은 여러 개의 공고를 가지는 1:N,  지원목록은 여러 명의 유저를 가지는 1:N
3. ORM 기술로는 Prisma를 선택 -> 공고 검색 기능을 구현할 때 fulltextsearch 설정을 하여 검색 기능 구현
4. 채용 공고 상세 보기의 프로퍼티 중에서 해당 기업의 다른 공고 id 배열을 가져오는 부분은 우선 raw 쿼리로 구현
5. 우선, 프리온보딩 신청 마감 당일에 작업을 시작할 수 있게 돼서, 하나의 공고가 여러 개의 기술 스택을 보유하는 등의 고려사항은 고려하지 않고 구현.