function solution(n, m) {
    const euclideanBig = (a, b) => {
        if (b === 0) return a;
        return euclideanBig(b, a % b);
    }
    
    const euclideanSmall = (a, b) => (a * b) / euclideanBig(a, b);
    
    return [euclideanBig(n, m), euclideanSmall(n, m)]
}