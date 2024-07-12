function solution(a, b) {
    // 1. a, b 크기를 비교
    // 1-1. a, b가 같은 수라면 a 리턴
    // 1-2. a, b의 크기가 다를 경우 오름차순으로 정렬
    // 2. x부터 y까지의 정수를 담을 빈 배열 생성 후 a부터 b까지의 정수를 담기 
    // 2-1. 배열의 크기 (y - x + 1)
    // 3. 배열의 합 
    
    if (a === b) return a;
    
    let [x, y] = [a, b].sort((a, b) => a - b);
    
    let nums = Array.from({ length: y - x + 1}, (_, i) => i + x );
    
    return nums.reduce((acc, cur) => { return acc += cur });
}