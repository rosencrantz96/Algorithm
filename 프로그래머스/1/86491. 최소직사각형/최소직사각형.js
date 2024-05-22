function solution(sizes) {
    // 배열 내의 가로, 세로를 [큰 수, 작은수]로 재정렬
    let result = sizes.map((v) => {
        return v.sort((a, b) => b - a);
    });
    
    let findOne = (arr, n) => {
        // 배열의 n번째 숫자만 담을 배열
        let element = [];
        for(let i=0; i<arr.length; i++) {
            element.push(arr[i][n]);
        };
        // 그 중에 가장 큰 숫자를 return
        return Math.max(...element)
    }
    
    return findOne(result, 0) * findOne(result, 1);
}