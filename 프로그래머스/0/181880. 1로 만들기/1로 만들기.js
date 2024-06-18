function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        while (cur > 1) {
            cur % 2 === 0 ? cur = cur / 2 : cur = (cur - 1) / 2;
            acc++;
        }
        return acc;
    }, 0)
}