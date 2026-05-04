interface Education {
    type: 'university' | 'certificate';
    title: string;
    start_date: string;
    end_date?: string; //선택사항
    major: string;
    status?: 'graduated' | 'dropout';   //선택사항
}

const EDUCATION: Education[] = [
    {
        type: 'university',
        title: '서울호텔관광전문학교',
        start_date: '2014.09',
        end_date: '2016.03',
        major: '관광경영학과',
        status: 'graduated'
    },
    {
        type: 'university',
        title: '경기과학기술대학교',
        start_date: '2013.03',
        end_date: '2013.07',
        major: '신재생에너지과',
        status: 'dropout'
    },
    {
        type: 'certificate',
        title: 'SQLD',
        start_date: '2022.09',
        major: '한국데이터산업진흥원'
    }
];

export default EDUCATION;