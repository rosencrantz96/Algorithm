function solution(my_string, queries) {
    let splitStr = my_string.split('');
    
    for (let [s, e] of queries) {
        let middle = splitStr.slice(s, e+1).reverse();
        splitStr.splice(s, e -s+1, ...middle);
    }
    return splitStr.join('');
}