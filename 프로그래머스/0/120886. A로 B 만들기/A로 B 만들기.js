function solution(before, after) {
    let a = [...before].sort().join('');
    let b = [...after].sort().join('');
    
    return a === b ? 1 : 0;
}