function solution(n) {
    let not3 = [];
    let num = 1; 
    
    while (not3.length < n) {
        if (num%3 !== 0 && !String(num).includes('3')) {
            not3.push(num);
        }
        num++;
    }
    
    return not3[n-1];
}