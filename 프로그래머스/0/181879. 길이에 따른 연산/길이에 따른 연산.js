function solution(num_list) {
    let result = 0
    if (num_list.length >= 11) {
        result = num_list.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
    } else {
        result = num_list.reduce((acc, cur) => {
            return acc *= cur;
        }, 1)
    }
    return result;
}