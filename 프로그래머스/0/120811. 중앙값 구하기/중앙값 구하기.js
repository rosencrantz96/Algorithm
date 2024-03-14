function solution(array) {
    const list = array.sort((a, b) => a - b);
    
    return list[Math.floor(array.length / 2)];
}