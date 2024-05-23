function solution(num_list) {
    let multiple = num_list.reduce((acc, cur) => {
        console.log(cur)
        return acc *= cur
    }, 1);
    
    let pow = num_list.reduce((acc, cur) => {
        return acc += cur;
    }, 0);
    
    return multiple < Math.pow(pow, 2) ? 1 : 0;
}