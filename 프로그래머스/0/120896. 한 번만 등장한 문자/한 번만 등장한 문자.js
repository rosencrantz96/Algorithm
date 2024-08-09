function solution(s) {
    /*
    1. 원본 문자열을 Set을 사용해서 중복되지 않는 요소만 배열로 추출한다.
    2. 배열을 순회하며 각 요소로 원본 문자열을 잘랐을 때 배열의 크기가 2가 되는 녀석만 고른다. (2면 하나만 존재하는 거니깐, map, filter 사용)
    3. 사전순으로 정렬한 후 문자열로 붙여서 반환한다. (sort, join 사용)
    */
    
    let charArr = Array.from(new Set(s));
    
    return charArr.map((v) => { 
            if (s.split(v).length === 2) return v 
        }).filter(v => v).sort().join('');
}