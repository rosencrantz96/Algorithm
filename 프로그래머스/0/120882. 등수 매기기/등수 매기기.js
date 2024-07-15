function solution(score) {
    // 평균 점수를 담을 빈 배열
    let scoreArr = [];
    // 평균점수와 랭킹 정보를 담은 객체를 담을 빈 배열 
    let result = [];
    
    // socore 배열을 돌면서 평균점수를 scoreArr에 넣어주고,
    // 각각의 평균 점수와 랭킹 정보는 0으로 초기화한 객체를 배열에 넣는다.
    for ([num1, num2] of score) {
        scoreArr.push((num1+num2)/2);
        result.push({avg: (num1+num2) / 2, rank: 0});
    };
    
    // 평균 점수를 내림차순 정렬
    scoreArr.sort((a, b) => b-a);
    // 일치하는 인덱스 번호 + 1로 rank값 갱신
    result.map((v, i) => {
        return v.rank = scoreArr.findIndex((e) => e === v.avg) + 1;
    })
    
    return result.map((v) => v.rank);
}