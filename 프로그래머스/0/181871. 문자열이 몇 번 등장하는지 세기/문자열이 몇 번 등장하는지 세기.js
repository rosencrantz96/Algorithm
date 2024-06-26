function solution(myString, pat) {
    return [...myString].reduce((acc, cur, idx) => {
        let str = myString.slice(idx, pat.length+idx);
        if(str === pat) return acc + 1;
        return acc;
    }, 0)
}