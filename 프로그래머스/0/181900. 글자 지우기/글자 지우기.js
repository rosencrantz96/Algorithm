function solution(my_string, indices) {
    let idx = indices.sort((a, b) => b - a);
    let string = [...my_string];
    
    for (let i=0; i<idx.length; i++) {
        string.splice(idx[i], 1);
    }
    
    return string.join('');
}