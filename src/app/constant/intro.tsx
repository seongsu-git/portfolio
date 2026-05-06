import React from "react";

interface Intro {
    title: string;
    description: React.ReactNode[]; // JSX 조각들을 담기 위해 ReactNode로 변경
}

const INTRO: Intro[] = [
    {
        title: '더 나은 팀을 위해',
        description: [
            <>코드작성은 나 뿐만이 아닌 <b>동료를 위한 것</b>이라고 생각합니다.</>,
            <>개인적인 발전보다 <b>팀의 상향평준화</b>를 지향합니다.</>,
            <>꾸준한 의사소통은 <b>내·외적인 신뢰</b>를 높일 수 있다고 믿습니다.</>
        ]
    },
    {
        title: '더 나은 개발자를 위해',
        description: [
            <>프론트엔드 개발자가 줄 수 있는 가치에 대해 고민합니다.</>,
            <>채우기보단 덜어내는 것이 중요하다 생각합니다.</>,
            <>다양한 관점 속에서 새로운 방향을 제안합니다.</>
        ]
    }
];

export default INTRO;