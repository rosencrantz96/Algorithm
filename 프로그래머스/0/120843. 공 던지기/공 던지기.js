function solution(numbers, k) {
    let idx = (2 * (k-1)) % numbers.length;
    return numbers[idx];
}