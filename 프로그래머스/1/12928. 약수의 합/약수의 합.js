function solution(n) {
    let intArr = Array.from({length: n}, (_, i) => i + 1);
    
    return intArr.reduce((a, c, i) => {
        if (n%c === 0) return a+=c;
        return a;
    }, 0);
}