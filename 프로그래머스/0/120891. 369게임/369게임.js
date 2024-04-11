function solution(order) {
    return [...String(order)].filter((el) => ["3", "6", "9"].includes(el)).length;
}