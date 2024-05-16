function solution(picture, k) {
    // 가로로 k배 늘리기 
    let widthK = picture.map((v) => {
        v = v.split('').map((el) => {
            return el.repeat(k);
        })
        return v.join('');
    })
    
    // 세로로 k배 늘리기
    let lengthK = widthK
        .map((v) => {
            return Array(k).fill(v);
        })
        .flat();
    
    return lengthK;
}