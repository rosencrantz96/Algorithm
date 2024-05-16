function solution(arr) {
    // 배열 바꾸기
    const changeArr = (arr) => {
        return arr.map((el) => {
            if (el >= 50 && el % 2 == 0) return el / 2;
            else if (el < 50 && el % 2 != 0) return el * 2 + 1;
            else return el;
        })
    }
    
    // 배열 바꾸는거 반복하기 
    const again = (arr, x) => {
        let newArr = [...arr];
        for (let i=0; i<x; i++) {
            newArr = changeArr(newArr);
        }
        return newArr;
    }
    
    // 배열이 이전 배열과 같은지 확인하기 
    const isEqual = (a, b) => {
        return a.length === b.length && a.every((val, i) => val === b[i]);
    }
    
    // 결과 값 초기화 
    let result = 0;
    
    // 반복 작업으로 결과 도출
    for (let i = 0; ; i++) {
        if (isEqual(again(arr, i), again(arr, i+1))) {
            result = i;
            break;
        }
    }
    return result; 
}