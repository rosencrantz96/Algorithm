function solution(n) {
    let evenArr = [];
    for (let i = 2; i <= n; i += 2) evenArr.push(i);

    evenArr.reduce((acc, cul, i) => {
        cul = acc + cul;
        return (evenArr[i] = cul);
    }, 0);
    return evenArr.length == 0 ? 0 : evenArr[evenArr.length - 1]
}