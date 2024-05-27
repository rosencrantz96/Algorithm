function solution(n, control) {
    change = {
        "w": +1,
        "s": -1,
        "d": +10,
        "a": -10
    } 
    let result = [...control].reduce((acc, cur) => {
        return acc += +change[cur];
    }, n);
    return result
}