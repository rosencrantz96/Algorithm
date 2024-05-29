function solution(my_string) {
    let arr = my_string.split(' ');
    let result = arr.reduce((acc, cur, i, arr) => {
        // 현재 값이 숫자일 때 - 누적값에 현재값 더하기  
        if(!isNaN(cur)) acc = acc += +cur;
        // 현재 값이 연산자일 때 
        else if(isNaN(cur) && cur == '+') arr[i] = 0;
        else if (isNaN(cur) && cur == '-') arr[i+1] *= -1;
        return acc
    }, 0);
    return result
}