function solution(array) {
    let newArr = [...array];
    let reArr = newArr.sort((a, b) => b - a);

    return [reArr[0], array.findIndex(v => v === reArr[0])];
}