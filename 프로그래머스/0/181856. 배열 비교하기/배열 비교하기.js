function solution(arr1, arr2) {
    let sum = (arr) => {
        return arr.reduce((acc, cur) => {
            return acc += cur;
        }, 0);
    }
    
    return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : sum(arr1) > sum(arr2) ? 1 : sum(arr1) < sum(arr2) ? -1 : 0;
}