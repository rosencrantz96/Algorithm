function solution(array, height) {
    let tallerCnt = 0;
    for (let i=0; i<array.length; i++) {
        if(array[i] > height) tallerCnt++;
    }
    return tallerCnt;
}