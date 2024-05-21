function solution(num_list) {
    let even = num_list.filter(v => v%2 != 0).join('')
    let add = num_list.filter(v => v%2 ==0).join('')
    return +even + +add
}