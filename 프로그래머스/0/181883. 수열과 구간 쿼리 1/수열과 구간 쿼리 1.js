function solution(arr, queries) {
    let answer = [];
    for (let [s, e] of queries) {
        answer = arr.map((v, i) => {
            if(i >= s && i <= e) {
                return arr[i] += 1;
            } else return arr[i];
        })
    }
    return answer;
}