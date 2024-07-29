function solution(n) {
    let root = Math.sqrt(n);
    
    return Number.isInteger(root) ? (root + 1) ** 2 : -1;
}