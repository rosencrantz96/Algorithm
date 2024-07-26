const getGcd = (x, y) => {
    return x % y === 0 ? y : getGcd(y, x % y);
}

const getPrimes = (x) => {
    let answer = [];
    let modify = x;
    for (let i=2; modify > 1; i++) {
        while (modify % i == 0) {
            answer.push(i);
            modify /= i;
        }
    }
    return [...new Set(answer)];
}

function solution(a, b) {
    // 1. 기약분수를 만들기 위해 최대공약수를 구하기 
    let gcd = getGcd(a, b);

    // 2. 분모를 최대공약수로 나누기 
    let giyak = b / gcd;
    // console.log(giyak)
    
    // 3. 약분한 분모를 소인수분해하기 
    let isPrime = getPrimes(giyak);
    
    return isPrime.filter(v => v !== 2).filter(v => v !== 5).length > 0 ? 2 : 1;
}