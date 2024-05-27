function solution(arr, n) {
    let result = [];
    if (arr.length % 2 == 0) {
        // arr의 길이가 짝수일 때
        result = arr.map((v, i) => {
            if (i % 2 == 0) return v;
            else return v = v+n;
        })
    } else {
        // arr의 길이가 홀수일 때
        result = arr.map((v, i) => {
            if(i % 2 == 0) return v = v+n;
            else return v;
        })
    }
    console.log(result);
    return result;
}