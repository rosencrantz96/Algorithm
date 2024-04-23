function solution(array, n) {
    let filter = array.filter((el) => el === n);
    return filter.length;
}