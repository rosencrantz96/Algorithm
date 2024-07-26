function solution(x, n) {
    let answer = [];
    let count = 1;
    
    while (count <= n) {
        answer.push(x * count);
        count++;
    }
    return answer;
}