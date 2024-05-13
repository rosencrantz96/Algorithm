function solution(q, r, code) {
    return code.split('').filter((v, i) => {
        if (i % q == r) return v
    }).join('');
    
}