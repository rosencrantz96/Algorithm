function solution(arr, idx) {
    return arr.findIndex((el, index) => 
        index >= idx && el === 1
    )
}