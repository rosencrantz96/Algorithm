function solution(before, after) {
    let b = [...before].sort().join('');
    let a = [...after].sort().join('');
    
    return b === a ? 1 : 0;
}