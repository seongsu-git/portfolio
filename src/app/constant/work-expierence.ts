interface Experience {
    thumbnail: string;
    company_name: string;
    job: string;
    start_date: string;
    end_date: string;
    work: Work[];
}

interface Work {
    title: string;
    description: string[];
}

const EXPIERENCE: Experience[] = [
    {
        thumbnail: 'diffchild.jpg',
        company_name: '배다른 남매',
        job: '프론트엔드 개발',
        start_date: '2023.03',
        end_date: '현재',
        work: [
            {
                title: '화면 렌더링 방식 최적화 (CSR → SSR)',
                description: [
                    '복잡한 상태값 대신 URL 주소(Query String)를 데이터의 기준으로 삼아, 페이지 새로고침 시에도 동일한 화면이 유지되도록 개선했습니다.',
                    '컴포넌트 사이의 얽힌 코드를 정리하여 불필요하게 화면이 다시 그려지는(Re-rendering) 현상을 줄이고 속도를 높였습니다.',
                    '데이터 흐름이 단순해지면서 예상치 못한 화면 오류가 줄어들고 코드 읽기가 편해졌습니다.'
                ]
            },
            {
                title: '서버 통신 구조 정리 및 미들웨어 활용',
                description: [
                    '여기저기 흩어져 있던 데이터 요청 코드를 하나로 모아 관리함으로써, 서버 주소가 바뀌어도 한 곳만 수정하면 되도록 만들었습니다.',
                    '로그인 인증이나 토큰 관리처럼 공통적으로 필요한 단계를 Middleware(proxy)에서 한 번에 처리하도록 설계했습니다.',
                    '반복되는 코드가 사라져 유지보수가 쉬워지고 전체적인 통신 흐름이 깔끔해졌습니다.'
                ]
            },
            {
                title: '다시 쓰기 좋은 공통 컴포넌트 설계',
                description: [
                    'Header: 각 영역을 부품처럼 나누어 설계하여, 페이지별로 헤더 모양이 달라도 유연하게 대응할 수 있게 했습니다.',
                    'HeaderItem: 헤더의 기능(뒤로가기, 검색 등)을 독립된 컴포넌트로 정의하여 의존성을 분리하고 유지보수성을 높였습니다.',
                    'Modal: 창 밖을 누르면 닫히거나, 열리자마자 입력창에 커서가 가는 기능을 넣어 사용자가 더 편하게 쓸 수 있도록 구현했습니다.',
                    'Input: 정적 데이터와 동적 데이터를 명확히 나누어 설계해, 다양한 곳에서 재사용하기 좋게 만들었습니다.'
                ]
            },
            {
                title: 'React Native를 이용한 하이브리드 앱 개발 및 운영',
                description: [
                    'ReactNativeWebView의 postMessage 인터페이스를 활용하여 웹(Web)과 네이티브(App) 간의 실시간 데이터 통신 기능을 구현했습니다.',
                    'SSO 로그인, 결제 모듈 등 모바일 환경에 특화된 네이티브 라이브러리를 연동하여 서비스 기능을 확장했습니다.',
                    '안드로이드 16KB 페이지 사이즈 대응 등 플랫폼별 OS 업데이트에 따른 이슈를 분석하고 핫픽스를 통해 서비스 안정성을 유지했습니다.'
                ]
            },
            {
                title: '데이터 시각화 및 인터랙티브 UI 구현',
                description: [
                    'FullCalendar를 사용하여 모바일에서도 보기 편한 반응형 일정 관리 화면을 만들었습니다.',
                    '구글 고도 정보 API와 Chart.js를 연결해 등산로의 높낮이를 그래프로 보여주는 기능을 구현했습니다.'
                ]
            }
        ]
    },
    {
        thumbnail: 'conist.png',
        company_name: '코니스트',
        job: '풀스택 개발',
        start_date: '2021.08',
        end_date: '2022.08',
        work: [
            {
                title: '웹툰·웹소설 플랫폼 데이터 수집 모듈 개발',
                description: [
                    'Python(BeautifulSoup, Selenium)을 활용하여 여러 플랫폼의 데이터를 실시간으로 수집하는 크롤러를 구축했습니다.',
                    '정규표현식(re)을 통해 수집된 비정형 데이터를 정규화하여 데이터의 정확도를 높였습니다.'
                ]
            },
            {
                title: '데이터베이스 설계 및 쿼리 최적화',
                description: [
                    '조회의 핵심이 되는 시간 데이터를 Unix Timestamp(정수형)로 저장하여, 인덱스 효율과 검색 속도를 대폭 개선했습니다.',
                    'MySQL EXPLAIN으로 쿼리 실행 계획을 분석하고, 필요한 경우 Force Index, Use Index 등을 사용해 대용량 데이터 조회 성능을 튜닝했습니다.'
                ]
            },
            {
                title: '검색 엔진 최적화(SEO) 및 운영 전략',
                description: [
                    '일반 사용자와 검색 봇(Bot)의 접근을 구분하고, 봇에게 노출되는 콘텐츠를 동적으로 제어하여 검색 페널티 방지 및 상위 노출을 유도했습니다.'
                ]
            },
            {
                title: '프론트엔드 현대화 및 고도화',
                description: [
                    '기존 Blade.php 템플릿 기반의 코드를 React.js로 전환하여 컴포넌트 중심의 UI 구조를 만들고 SPA로 사용자 경험을 개선했습니다.'
                ]
            },
            {
                title: '데이터 시각화 구현',
                description: [
                    'C3.js 라이브러리를 활용하여 플랫폼별 랭킹과 조회수 변동 추이를 직관적인 차트로 구현했습니다.'
                ]
            }
        ]
    }
];

export default EXPIERENCE;