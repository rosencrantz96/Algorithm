function solution(my_string) {
    let string = [...my_string];
    
    return string.map((v, i, arr) => {
        return arr.slice(i).join('');
    }).sort();
}