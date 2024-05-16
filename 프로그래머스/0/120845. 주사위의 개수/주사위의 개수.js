function solution(box, n) {
    return box.map((v) => {
            return Math.floor(v / n);
        })
        .reduce((acc, cur) => {
            return (acc *= cur);
        }, 1);
}