function solution(my_string, n) {
    var answer = '';
    const stringArr = my_string.split("");
    for (let i=0; i < stringArr.length; i++) {
        for (let j=0; j < n; j ++) {
            answer += stringArr[i]
        }
    }
    return answer;
}