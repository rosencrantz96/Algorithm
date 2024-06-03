function solution(s1, s2) {
    let answer = 0;
    s2.forEach((el) => {
        for(v of s1) {
            if (el === v) answer++;
        }
    })
    return answer;
}