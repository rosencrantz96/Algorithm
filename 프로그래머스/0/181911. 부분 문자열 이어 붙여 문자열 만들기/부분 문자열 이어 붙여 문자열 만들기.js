function solution(my_strings, parts) {
    let sliceString = (string, num1, num2) => {
        return string.slice(num1, num2+1)
    };
    
    let result = '';
    result = my_strings.map((v, i) => {
        console.log(v, parts[i][0], parts[i][1]);
        return v = sliceString(v, parts[i][0], parts[i][1]);
    }).join('');
    
    return result;
}