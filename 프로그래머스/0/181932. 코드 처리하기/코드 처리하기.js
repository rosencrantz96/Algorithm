function solution(code) {
    let mode = 0;
    let ret = '';
    
    // 정리 - mode에 관계 없이 현재 요소가 1이면 무조건 mode를 변경함
    // mode에 관계 없이 현재 요소가 0이나 문자이면 mode에 따라 문자열 추가 (조건만 다름)
    
    // 1. code를 순회하며 code[idx] 값이 문자인지, 숫자인지 구분한다.
    // 2. 숫자일 경우 mode를 바꿀지 말지에 대한 판별을 한다. 
    // 3. 문자일 경우 mode를 확인한 후 mode에 따른 행동을 한다. 
    
    let result = [...code].reduce((acc, cur, i) => {
        if (!isNaN(cur) && cur === '1') {   // code[idx]가 1일 때 mode 변경 
            acc.mode === 0 ? acc.mode = 1 : acc.mode = 0;
        } else {    // 나머지 경우 (code[idx]가 0이거나 문자일 때)
            if (acc.mode === 0) {
                if (i % 2 === 0) acc.ret += cur;
            } else {
                if (i % 2 !== 0) acc.ret += cur;
            }
        }
        return acc;
    }, { mode, ret })
    
    return result.ret.length === 0 ? "EMPTY" : result.ret;
}