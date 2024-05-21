function solution(keyinput, board) {
    // 최대 좌표 절댓값 구하기
    let maxX = Math.floor(board[0]/2);
    let maxY = Math.floor(board[1]/2);
    console.log(maxX);
    console.log(maxY);
    
    // x, y 좌표 값 초기화
    let x = 0;
    let y = 0;
    
    for (i of keyinput) {
        switch(i) {
            case 'left':
                x--;
                x = x < -maxX ? -maxX : x;
                break;
            case 'right': 
                x++;
                x = x > maxX ? maxX : x;
                break
            case 'up':
                y++;
                y = y > maxY ? maxY : y;
                break;
            case 'down':
                y--;
                y = y < -maxY ? -maxY : y;
                break
        }
    }
    
    return [x, y]
}