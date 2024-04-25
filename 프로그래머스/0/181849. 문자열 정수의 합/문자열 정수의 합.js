function solution(num_str) {
    return num_str.split('').reduce((acc, cur) => {
        return +acc + +cur;
    }, 0)
}