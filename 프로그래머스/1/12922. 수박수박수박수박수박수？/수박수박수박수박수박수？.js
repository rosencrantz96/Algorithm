function solution(n) {
    /*
    1. 길이가 n인 배열 생성
    2. 현재 인덱스가 짝수이면 '수', 홀수이면 '박'을 반환
    3. 문자열로 합쳐서 반환 (join)
    */
    
    return Array.from({length: n}, (_, i) => (i%2 === 0 ? '수' : '박')).join('');
    
}