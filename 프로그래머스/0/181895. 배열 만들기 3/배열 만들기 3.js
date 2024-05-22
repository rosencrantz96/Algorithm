function solution(arr, intervals) {
    let sliceArr = (a, b) => {
        return arr.slice(a, b)
    };
    
    let result = []
    for (let [a, b] of intervals) {
        result = result.concat(sliceArr(a, b +1)) 
    }

    return result
}