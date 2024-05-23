function solution(my_string, s, e) {
    let arr = [...my_string];
    console.log(arr.slice(0, s))
    console.log(arr.slice(s, e + 1).reverse())
    console.log(arr.slice(e + 1))
    return [...arr.slice(0, s), ...arr.slice(s, e+1).reverse(), ...arr.slice(e+1)].join('')
}