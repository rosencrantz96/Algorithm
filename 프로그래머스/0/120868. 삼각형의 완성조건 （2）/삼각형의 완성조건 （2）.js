function solution(sides) {
    let long = Math.max(sides[0], sides[1]);
    let short = Math.min(sides[0], sides[1]);
    let possible = [];

    for (let i = long - short + 1; i <= long; i++) {
        possible.push(i);
    }
    for (let i = long + 1; i < long + short; i++) {
        possible.push(i);
    }
    return possible.length;
}