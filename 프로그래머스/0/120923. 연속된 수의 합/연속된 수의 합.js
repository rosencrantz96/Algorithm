function solution(num, total) {
    // 정수 배열의 첫 번째 값 구하기 
    let sum = (num - 1) * num / 2;
    let el = (total - sum) / num;
    
    return Array.from({ length: num }, (_, idx) => el + idx);
}