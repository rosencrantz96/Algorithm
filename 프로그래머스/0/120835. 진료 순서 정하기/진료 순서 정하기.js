function solution(emergency) {
    let answer = Array(emergency.length).fill(0);
    for (let i=1; i<=emergency.length; i++) {
        let bigger = Math.max(...emergency);
        let idx = emergency.indexOf(bigger);
        answer[idx] = i;
        emergency[idx] = 0;
    }
    return answer;
}