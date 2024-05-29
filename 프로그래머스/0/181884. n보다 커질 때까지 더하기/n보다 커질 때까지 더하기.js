function solution(numbers, n) {
    let sumArr = [];
    let result = numbers.reduce((acc, cur) => {
        acc = acc+=cur;
        sumArr.push(acc);
        return acc;
    }, 0);
    return sumArr.find((v) => v > n)
}