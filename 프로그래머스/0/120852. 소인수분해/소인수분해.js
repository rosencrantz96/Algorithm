function solution(n) {
    let answer = [];
    let modifiedN = n;
    for (let i=2; modifiedN > 1; i++) {
        while (modifiedN % i == 0) {
            answer.push(i);
            modifiedN /= i;
        }
    }
    
    return [...new Set(answer)]
}