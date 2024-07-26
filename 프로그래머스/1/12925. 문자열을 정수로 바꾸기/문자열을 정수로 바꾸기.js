function solution(s) {
    let split = s.split('');
    let numbers = split.map((v) => {
        if (!isNaN(v)) return +v
    }).join('');
    return split[0] === '-' ? -numbers : +numbers;
}