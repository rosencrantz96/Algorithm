// 자릿수의 합을 구하는 함수
let digitSum = (n) => {
    let str = n.toString();
    let answer = [...str].reduce((acc, cur) => {
        console.log(cur)
        return acc += +cur;
    }, 0)
    return answer;
}

function solution(x) {
    return x % digitSum(x) == 0 ? true : false;
}