function solution(arr) {
    const findIndex = (arr) => {
        let newArr = arr;
        let result = [];
        newArr.find((el, i) => {
            if(el == 2) result.push(i)
        });
        return result;
    };
    let result = findIndex(arr);
    
    return result.length == 0 ? [-1] : arr.slice(result[0], result[result.length - 1] + 1);
}