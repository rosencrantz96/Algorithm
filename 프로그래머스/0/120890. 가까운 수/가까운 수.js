function solution(array, n) {
    // n과의 차이를 배열로
    let result = array.map(v => Math.abs(v - n));
    
    // 가장 작은 차이값
    let minDiff = Math.min(...result);
    
    let idx = [];
    for (let i=0; i<result.length; i++) {
        if (result[i] == minDiff) idx.push(i)
    }
    
    let answer = idx.map(i => array[i])
    
    return Math.min(...answer)
}