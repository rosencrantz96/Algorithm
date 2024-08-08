function solution(arr) {
    let min = Math.min(...arr);
    let result = arr.filter(v => v > min);
    return result.length > 0 ? result : [-1];
}