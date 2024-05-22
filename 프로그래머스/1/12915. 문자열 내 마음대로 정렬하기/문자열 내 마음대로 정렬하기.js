function solution(strings, n) {
    // n번째 글자를 문자열 앞에 붙여서 새로운 배열 생성 
    let newStrings = strings.map((v, i) => {
        return strings[i][n] + v
    })
    // 정렬 후 앞글자를 떼서 결과 반환
    let result = newStrings.sort().map((v) => {
        return v.slice(1);
    })
    return result;
}