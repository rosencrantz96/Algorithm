function solution(numbers) {
    let result = numbers.sort((a, b) => a - b);
    
    let front = result[0] * result[1];
    let back = result[result.length-2] * result[result.length-1];
    
    return Math.max(front, back);
}