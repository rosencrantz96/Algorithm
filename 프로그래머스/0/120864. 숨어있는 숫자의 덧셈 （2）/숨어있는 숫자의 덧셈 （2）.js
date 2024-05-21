function solution(my_string) {
    // 정규표현식을 사용해서 알파벳 소문자, 대문자를 제거함 
    let stringArr = my_string.replace(/[A-z]/g, " ").split(" ");
    return stringArr.reduce((acc, cur) => {
        if(!isNaN(+cur)) return acc += +cur;
    }, 0)
}