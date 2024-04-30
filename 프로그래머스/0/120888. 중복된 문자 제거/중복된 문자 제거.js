function solution(my_string) {
    let arr = [...my_string];
    let newArr = [];
    
    for (let i=0; i<arr.length; i++) {
        if(!newArr.includes(arr[i])) newArr.push(arr[i])
    }
    
    return newArr.join('');
}