function solution(code) {
    let mode = 0;
    let ret = '';
    
    let result = [...code].reduce((acc, cur, i) => {
        if (!isNaN(cur) && cur === '1') {   // code[idx]가 1일 때 mode 변경 
            acc.mode === 0 ? acc.mode = 1 : acc.mode = 0;
        } else {    // 나머지 경우 (code[idx]가 0이거나 문자일 때)
            if ((acc.mode === 0 && i % 2 === 0) || (acc.mode === 1 && i % 2 !== 0)) 
                acc.ret += cur;
        }
        return acc;
    }, { mode, ret })
    
    return result.ret.length === 0 ? "EMPTY" : result.ret;
}