function solution(array) {
    let count = array.map((_, i) => {
        let count = array[i].toString().match(/7/g);
        return count == null ? 0 : count.length;
    });
    let result = count.reduce((acc, cur) => {
        
        return acc += cur;
    }, 0)
    return +result;
}