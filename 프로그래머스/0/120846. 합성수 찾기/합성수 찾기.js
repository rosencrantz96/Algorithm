function isPrime (num) {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
function solution(n) {
    let compositeCount = 0;
    for (let i = 4; i <=n; i++) {
        if (!isPrime(i)) compositeCount++;
    }
    return compositeCount;
}