function solution(strArr) {
    return strArr.map((v, i) => {
        if (i % 2 == 0 || i == 0) return v.toLowerCase();
        else return v.toUpperCase()
    })
}