function solution(strArr) {
    let result = [];
    
    let numCnt = strArr.map((v) => v = v.length);
    let set = Array.from(new Set(numCnt));
    
    for(let i=0; i<set.length; i++) {
        let el = numCnt.filter(v => v === set[i]).length;
        result.push(el)
    }
    
    return Math.max(...result)
}