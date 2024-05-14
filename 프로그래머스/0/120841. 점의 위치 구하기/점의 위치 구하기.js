function solution(dot) {
    let answer = 0;
    if(dot[0] > 0) {
        return dot[1] > 0 ? 1 : 4;
    } else {
        return dot[1] > 0 ? 2 : 3;
    }
}