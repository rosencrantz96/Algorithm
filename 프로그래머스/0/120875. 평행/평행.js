const isParallel = (dot) => {
    let [dot1, dot2, dot3, dot4] = dot;
    // dot1과 dot2를 이은 선분의 기울기
    let line1 = Math.abs(dot2[1]-dot1[1]) / Math.abs(dot2[0] - dot1[0]);
    // dot3과 dot4를 이은 선분의 기울기
    let line2 = Math.abs(dot4[1]-dot3[1]) / Math.abs(dot4[0]-dot3[0]);

    return line1 === line2 ? true : false;
}

function solution(dots) {
    // // x좌표를 기준으로 배열을 정렬하기 
    // let x = dots.sort((a, b) => {
    //     a = a[0];
    //     b = b[0];
    //     return a - b;
    // });
    // // y좌표를 기준으로 배열을 정렬하기 
    // let y = dots.sort((a, b) => {
    //     a = a[1];
    //     b = b[1];
    //     return a - b;
    // });

    return isParallel(dots) ? 1 : 0;
}