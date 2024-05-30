function solution(arr) {
    let makeArr = (n) => {
        return new Array(n).fill(n)
    };
    
    return arr.map((v) => {
        return v = makeArr(v);
    }).flat();
}