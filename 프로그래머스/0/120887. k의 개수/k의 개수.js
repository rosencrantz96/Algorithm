function solution(i, j, k) {
    let str = k.toString();
    return Array.from({ length: j - i + 1 }, (_, idx) => i + idx)
        .map((v) => v.toString())
        .filter(v => v.includes(str))
        .reduce((a, c) => {
            c = c.split('');
            for(let char of c) {
                if (char === str) a++
            }
            return a;
        }, 0)
}