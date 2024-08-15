function solution(num) {
    let answer = 0;
    
    for(let i = 0; i < 500; i++) {
        if (num !== 1) {
            num = num % 2 ? num * 3 + 1 : num / 2 ;
        } else {
            return answer = i;
        }
    }
    return answer = -1;
}