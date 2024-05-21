function solution(a, b) {
    const calc1 = (a, b) => {
        return a.toString() + b.toString()
    }
    const calc2 = (a, b) => {
        return 2 * a * b
    }
    
    let result1 = calc1(a, b);
    let result2 = calc2(a, b);
    
    return result1 > result2 ? +result1 : result2;
}