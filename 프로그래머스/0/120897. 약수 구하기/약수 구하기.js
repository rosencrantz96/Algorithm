function solution(n) {
    let divisor = [1];
    for (let i=2; i<=n; i++) {
        if (n % i === 0) divisor.push(i);
        divisor.sort((a,b) => a - b);
    }
    return divisor;
}