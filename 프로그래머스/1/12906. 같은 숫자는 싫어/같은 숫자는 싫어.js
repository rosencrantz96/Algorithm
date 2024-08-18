function solution(arr) {
    return arr.map((v, i) => {
        if (v !== arr[i - 1]) return v
    }).filter(v => v !== undefined);
}