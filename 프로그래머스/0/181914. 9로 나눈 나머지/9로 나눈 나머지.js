// 각 자리 숫자의 합 구하는 함수 
const sum = (arr) => {
    return [...arr.toString()].reduce((acc, cur) => { return acc += +cur; }, 0);
}

function solution(number) {
    return sum(number) % 9;
}