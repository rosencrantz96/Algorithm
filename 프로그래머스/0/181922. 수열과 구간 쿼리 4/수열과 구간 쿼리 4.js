function solution(arr, queries) {
    let result;
    for (let [s, e, k] of queries) {
        for (let i = s; i<= e; i++) {
            if(i%k === 0) arr[i] += 1;
        }
    }
    return arr;
}