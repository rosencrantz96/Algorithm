function solution(sides) {
    sides.sort((a, b) => b - a);
    const reArr = sides.slice(1);
    const restSum = reArr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    if (sides[0] < restSum) return 1;
    else return 2;
}