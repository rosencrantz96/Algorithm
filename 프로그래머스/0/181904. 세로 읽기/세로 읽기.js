function solution(my_string, m, c) {
    let arr = [];
    let answer = '';
    
    for (let i=0; i<my_string.length; i+=m) {
        arr.push(my_string.substring(i, i+m));
    }
    
    for (let j = 0; j < arr.length; j++) {
        answer += arr[j].charAt(c - 1);
    }
    
    return answer;
}