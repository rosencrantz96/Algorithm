const calcFac = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

function solution(n) {
    let answer = [];
    for (let i = 1; calcFac(i) <= n; i++) {
        answer.push(i);
    }
    return answer[answer.length - 1];
}