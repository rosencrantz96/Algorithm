function solution(a, b) {
    let isEven = (a) => {
        return a % 2 != 0 ? true : false;
    }
    
    let result = 0;
    
    if (isEven(a) && isEven(b)) result = Math.pow(a, 2) + Math.pow(b, 2);
    else if (isEven(a) || isEven(b)) result = 2 * (a + b);
    else result = Math.abs(a - b);
    
    return result;
}