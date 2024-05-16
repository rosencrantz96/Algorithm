function solution(my_string) {
    return [...my_string]
        .filter((v) => !isNaN(v))
        .reduce((acc, cur) => {
            return (acc += +cur);
        }, 0);
}