function solution(arr) {
    // 2의 거듭제곱인지 판별 
    let isPow2 = (x) => {
        return Number.isInteger(Math.log2(x)) ? true : false;
    }
    
    if(isPow2(arr.length)) return arr;
    else {
        // 2의 거듭제곱이 될 때까지 0을 추가 
        while (!isPow2(arr.length)) {
            arr.push(0);
        }
    }
    return arr;
}