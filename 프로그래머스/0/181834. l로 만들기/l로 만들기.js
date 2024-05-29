function solution(myString) {
    // 108
    let standard = 'l'.charCodeAt();
    
    return [...myString].map((v) => {
        if (standard - v.charCodeAt() > 0) return v = 'l';
        return v;
    }).join('');
}