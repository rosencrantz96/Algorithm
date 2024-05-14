function solution(rsp) {
    return [...rsp].reduce((acc, cur) => {
        cur = cur == 2 ? 0 : cur == 0 ? 5 : 2;
        return (acc += cur);
    }, '');
}