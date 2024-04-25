function solution(num_list, n) {
    let answer = num_list.filter((el) => {
        return el === n;
    }).length;
    return answer >= 1 ? 1 : 0;
}