function solution(numbers) {
    let nums = [];
    numbers.sort();
    for(let i=0;i<=9; i++) {
        let index = numbers.indexOf(i);
        if (index === -1) {
            nums.push(i);
        }
    }
    return nums.reduce((a, c) => { return a+=c }, 0);
}