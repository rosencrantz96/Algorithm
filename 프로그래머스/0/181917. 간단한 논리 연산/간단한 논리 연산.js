const calc1 = (a, b) => {
    if (a ==b && b == false) return false;
    return true;
}
const calc2 = (c, d) => {
    if (c == d && c == true) return true;
    return false
}

function solution(x1, x2, x3, x4) {
    return calc2(calc1(x1, x2), calc1(x3, x4));
}