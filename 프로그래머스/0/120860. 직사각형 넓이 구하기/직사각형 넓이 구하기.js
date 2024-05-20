function solution(dots) {   
    // 가로 구하기 
    let getWidth = (arr) => {
        let [x1, x2, x3, x4] = [...arr];
        let right = Math.max(x1[0], x2[0], x3[0], x4[0]);
        let left = Math.min(x1[0], x2[0], x3[0], x4[0]);
        
        return right - left;
    }
    // 세로 구하기
    let getHeight = (arr) => {
        let [y1, y2, y3, y4] = [...arr];
        let up = Math.max(y1[1], y2[1], y3[1], y4[1]);
        let down = Math.min(y1[1], y2[1], y3[1], y4[1]);
        
        return up - down;
    }
    
    return getWidth(dots) * getHeight(dots);
}