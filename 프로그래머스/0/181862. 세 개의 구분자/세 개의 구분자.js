function solution(myStr) {
    let result = [...myStr]
            .map(v => v === "a" || v === "b" || v === "c" ? ' ' : v)
            .join('').split(' ')
            .filter(v => v);
    return result.length > 0 ? result : ["EMPTY"];
}