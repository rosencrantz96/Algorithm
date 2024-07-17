function solution(n) {
    // 정답을 담을 배열을 초기화한 후 1부터 n의 2제곱까지의 정수를 담은 배열 생성 
    let answer = Array.from({length: n}, () => Array(n).fill(0));
    let numArr = Array.from({length: n**2 }, (_, i) => i + 1 );
    
    // 배열에 숫자를 추가하는 방향은 오른쪽, 아래쪽, 왼쪽, 위쪽으로 바뀐다
    let firstRow = 0; 
    let lastRow = n-1;
    let firstCol = 0; 
    let lastCol = n-1;
    let index = 0
    
    while (firstRow <= lastRow && firstCol <= lastCol) {
        // 오른쪽으로 이동 
        for(let i=firstCol; i<=lastCol; i++) {
            answer[firstRow][i] = numArr[index++];
        }
        firstRow++; // 행을 다 채우면 시작행을 하나 올리고 다음 단계 시작
        
        // 아래로 이동
        for(let j=firstRow; j<=lastRow; j++) {
            answer[j][lastCol] = numArr[index++];
        }
        lastCol--; // 열을 다 채우면 마지막열을 하나 줄이고 다음 단계 시작
        
        // 왼쪽으로 이동
        if(firstRow <= lastRow) {
            for(let k=lastCol; k>=firstCol; k--) {
                answer[lastRow][k] = numArr[index++];
            }
            lastRow--; // 행을 다 채우면 마지막행을 하나 줄이고 다음 단계 시작
        }
        
        // 위로 이동
        if(firstCol <= lastCol) {
            for(let l=lastRow; l>=firstRow; l--) {
                answer[l][firstCol] = numArr[index++];
            }
            firstCol++; // 열을 다 채우면 시작열을 하나 올리고 다음 단계 시작
        }
    }

    return answer;
}