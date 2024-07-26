function solution(n) {
    let result = [...n.toString()].sort((a, b) => b - a).map((v) => +v).join('');
    return +result;
}