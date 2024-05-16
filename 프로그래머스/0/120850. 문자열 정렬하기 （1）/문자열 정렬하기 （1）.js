function solution(my_string) {
    let num = '0123456789';
    return [...my_string]
        .filter((v) => {
            return num.includes(v);
        })
        .map((v) => {
            console.log(typeof v);
            return +v;
        })
        .sort((a, b) => a - b);
}