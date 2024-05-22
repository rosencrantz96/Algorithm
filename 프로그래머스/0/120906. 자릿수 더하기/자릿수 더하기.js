function solution(n) {
    return n.toString().split('').reduce((acc, cur) => {
        return acc += +cur;
    }, 0);
}