// 지뢰찾기
const findMine = (board) => {
    let mine = [];
    board.forEach((row, i) => {
        row.forEach((ceil, j) => {
            if (ceil === 1) mine.push([i, j]);
        })
    })
    return mine
}

// 안전하지 않은 좌표를 0에서 1로 바꾸기 (단, 이미 1일 경우 그대로 1로 두기)
const changeBoard = (mines, board) => {
    // 지뢰 주변의 안전하지 않은 좌표를 notSafe 배열에 추가 
    let notSafe = [];
    mines.forEach(([x, y]) => {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let newX = x + i;
                let newY = y + j;
                // 유효한 좌표인지 확인
                if (newX >= 0 && newY >= 0 && newX < board.length && newY < board[0].length) {
                    notSafe.push([newX, newY]);
                }
            }
        }
    });
    
    // notSafe 배열을 참고하여 해당하는 곳의 좌표를 1로 변경
    notSafe.forEach(([x, y]) => {
        board[x][y] = 1;
    });
    
    return board;
}

// 안전지역 숫자 세기
const countSafeSide = (board) => {
    let safeArea = 0;
    board.forEach((row, i) => {
        row.forEach((ceil, j) => {
            if (ceil === 0) safeArea++;
        })
    })
    return safeArea;
}

function solution(board) {
    // 지뢰 좌표 배열을 구한다
    let mines = findMine(board);
    console.log(mines)
    
    // 지뢰에 안전한 칸을 위험지역으로 바꾸기 
    let remarkBoard = changeBoard(mines, board);
    console.log(board)
    
    // 안전한 지역 칸 수 계산
    return countSafeSide(remarkBoard)
    
}