interface Project {
    href: string;
    label: string;
    thumbnail: string;
    description: string;
}

const PROJECTS: Project[] = [
    {
        href: "https://ohiking.today",
        label: "오늘등산",
        thumbnail: "",
        description: "회원 수 1만 명 규모의 등산 플랫폼",
    },
    {
        href: "https://startup.baemin.com/",
        label: "배민스타트업스퀘어",
        thumbnail: "baemin-startup.jpg",
        description: "스타트업을 지원하는 정보 큐레이션 및 커뮤니티 플랫폼",
    },
    {
        href: "https://modu-mentoring.org/",
        label: "모두의멘토링",
        thumbnail: "modu-mentoring.jpg",
        description: "카카오뱅크X점프가 주관하는 사회공헌 사업",
    },
    {
        href: "https://www.value-jump.org/",
        label: "가치점프",
        thumbnail: "value-jump.png",
        description: "인천국제공항공사X점프가 주관하는 사회공헌 사업",
    },
    {
        href: "https://archive.seoulchildrensmuseum.org/",
        label: "서울상상나라 아카이브",
        thumbnail: "",
        description: "어린이 전시 및 교육 데이터를 체계적으로 관리하는 디지털 아카이빙 시스템",
    },
    {
        href: "https://pqcmp.kr/",
        label: "PQC 마이그레이션 플랫폼",
        thumbnail: "pqc.png",
        description: "PQC 기술 확산을 위해 다양한 PQC 서비스를 제공",
    },
    {
        href: "https://www.ticketbay.co.kr/",
        label: "티켓베이",
        thumbnail: "ticketbay.png",
        description: "국내 최대 티켓중개거래 플랫폼",
    },
    // {
    //     href: "https://www.webtoonguide.com",
    //     label: "웹툰가이드",
    //     thumbnail: "",
    //     description: "월평균 150만 명 유입, 전체 가입 회원 수 10만 명의 웹툰 전문 웹진",
    // },
];


export default PROJECTS;