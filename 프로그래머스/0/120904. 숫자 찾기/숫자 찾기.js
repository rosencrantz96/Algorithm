function solution(num, k) {
    let idx = [...num.toString()].findIndex((el, i, num) => {
        console.log(num)
        return el == k
    });
    return idx == -1 ? idx : idx + 1 
}