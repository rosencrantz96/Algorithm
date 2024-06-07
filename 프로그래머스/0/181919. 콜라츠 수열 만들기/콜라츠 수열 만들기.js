// 짝수
const even = (n) => {
    return n / 2;
}
// 홀수
const odd = (n) => {
    return 3 * n + 1;
}

function solution(n) {
    let result = [];
    result.push(n)
    
    while (n > 1) {
        n % 2 === 0 ? n = even(n) : n = odd(n);
        result.push(n)
    }
    
    return result;
}