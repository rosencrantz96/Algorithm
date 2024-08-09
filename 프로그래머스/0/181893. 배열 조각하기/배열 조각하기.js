function solution(arr, query) {
    let curArr = arr.slice();
    
    query.forEach((index, i) => {
        if (i%2 === 0) {
            curArr.splice(index+1, curArr.length - (index+1));
        } else {
            curArr.splice(0, index);
        }
    })
    
    return curArr;
}
