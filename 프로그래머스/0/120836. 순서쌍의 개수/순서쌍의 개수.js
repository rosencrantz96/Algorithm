function solution(n) {
    const answer = [];
    for (let i = 0; i <= n; i ++) {
       if (n % i === 0) answer.push(i) 
    }
    return answer.length;
}