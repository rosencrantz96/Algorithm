function solution(arr, k) {
    let remove = new Set(arr);
    let result = Array.from(remove).slice(0, k);
    
    while (result.length < k) {
        result.push(-1)
    }
    return result;
}