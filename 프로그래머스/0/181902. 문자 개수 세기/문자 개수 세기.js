function solution(my_string) {
    // 빈 문자열에 아스키코드를 문자로 변환해서 대문자 A~Z, 소문자 a~z까지 담는다
    let str = ''
    for (let i=65; i<=90; i++) {
        str += String.fromCharCode(i);
    }
    for (let i=97; i<=122; i++) {
        str += String.fromCharCode(i)
    }
    // 알파벳 배열 만들기 
    const strArr = str.split('')
    
    let result = [];
    for (let i=0; i<strArr.length; i++) {
        // 카운트 할 변수 선언 
        let count =0;
        for (let j=0; j<my_string.length; j++) {
            // 같은 문자가 있으면 +1
            if (strArr[i] === my_string[j]) {
                count += 1;
            }
        }
        // 카운트의 숫자가 0보다 크면 더해진 숫자만큼 배열에 넣기? 설명이 이상하군
        if (count>0) {
            result.push(count);
        } else {
            // 아니면 배열에 0넣기 
            result.push(0)
        }
    }
    return result
}