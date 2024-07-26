function solution(n) {
    return n.toString().split('').reduce((a, c) => {
        return a += +c;
    },0);
}