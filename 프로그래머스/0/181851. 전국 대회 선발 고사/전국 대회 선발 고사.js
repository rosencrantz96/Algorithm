function solution(rank, attendance) {
    // 1. false 학생을 0으로 바꾸기
    let result = rank.map((v, i) => {
        if (!attendance[i]) return v = 0;
        return v;
    });
    // 2. 0이 아닌 rank의 순위 자르기 
    let ranking = result.filter(v => v != 0).sort((a, b) => a - b).slice(0, 3);
    
    // 3. ranking에 해당하는 인덱스 번호 찾아서 더하기...? 
    return ranking.reduce((acc, cur, i) => {
        switch(i) {
            case 0: 
                cur = 10000 * result.findIndex((v) => v == cur);
                break;
            case 1: 
                cur = 100 * result.findIndex((v) => v == cur);
                break;
            case 2: 
                cur = result.findIndex((v) => v == cur);
                break;
        }
        return acc = acc += cur;
    }, 0);
}