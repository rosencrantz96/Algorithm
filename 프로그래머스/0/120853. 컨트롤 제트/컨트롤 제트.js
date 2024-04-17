function solution(s) {
    const element = s.split(' ');

    return element.reduce((acc, cur, i) => {
        if (isNaN(cur) === false) {
            // 숫자
            acc += Number(element[i]);
        } else {
            // 문자
            acc -= Number(element[i - 1]);
        }
        return acc;
    }, 0);
}