function solution(l, r) {
    let answer = [];
    
    for (let i=l; i<=r; i++) {
        if ([...String(i)].every(num => num === '0' || num === '5')) {
            answer.push(i);
        }
    }
    return answer.length > 0 ? answer : [-1];
}