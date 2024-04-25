const even = (arr) => {
    let evenCnt = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) evenCnt++
    }
    return evenCnt;
}

function solution(num_list) {
    return [even(num_list), num_list.length - even(num_list)]
}