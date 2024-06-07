const plus = (arr) => {
    return +arr[0] + +arr[2];
}
const minus = (arr) => {
    return +arr[0] - +arr[2];
}

function solution(quiz) {
    let el = quiz.map((el) => el.split(' '));
    
    let result = el.map((val) => {
        let sum = 0;
        val[1] == '+' ? sum = plus(val) : sum = minus(val);
        if (val[4] == sum) return val = "O"
        else return val = "X"
    });
    return result;
}