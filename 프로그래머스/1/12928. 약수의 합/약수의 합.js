function solution(n) {
    // 정수 배열 만들기
    let intArr = Array.from({length: n}, (_, i) => i + 1);
    
    // 약수 합 
    // 아~~ 왜 익스텐션 안되는데~~
    return intArr.reduce((a, c, i) => {
        if (n%c === 0) return a+=c;
        return a;
    }, 0);
    
}