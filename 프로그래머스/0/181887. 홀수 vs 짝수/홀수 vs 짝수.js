function solution(num_list) {
    let even = num_list.filter((v, i) => {
        if(i % 2 == 0) return v
    }).reduce((acc, cur) => {return acc += cur}, 0)
    let odd = num_list.filter((v, i) => {
        if(i % 2 !=0) return v
    }).reduce((acc, cur) => {return acc += cur}, 0)
    
    return even >= odd ? even : odd 
}