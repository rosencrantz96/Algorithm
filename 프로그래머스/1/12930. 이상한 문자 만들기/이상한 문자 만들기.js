function solution(s) {
    /*
    1. 문자열을 공백 기준으로 나눈다.
    2. 나눠진 문자열 배열을 순회하며 각 배열마다 짝수 -> 대문자, 홀수 -> 소문자로 알파벳을 바꾼다.
    3. 그렇게 만들어진 이중 배열을 join('')을 통해서 안쪽 배열을 문자열로 합쳐주면서 일차원배열로 만든다.
    4. 공백을 하나 두고 배열을 다시 문자열로 합쳐준다. 
    */
    
    return s.split(' ').map((v) => {
        return Array.from(v).map((el, i) => {
            return i%2 === 0 ? el.toUpperCase() : el.toLowerCase();
        }).join('')
    }).join(' ')
    
    return result
}