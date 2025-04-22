function solution(progresses, speeds) {
    let answer = [];
    
    // 기능 개발에 남은 날짜 구하기 
    let requireDay = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index])
    })
    
    //
    let maxDate = requireDay[0];
    let count = 1; 
    
    for (let i=1; i<progresses.length; i++) {
        if (requireDay[i] > maxDate) {
            answer.push(count)
            maxDate = requireDay[i];
            count = 1;
        } else {
            count++;
        }
    } 
    
    answer.push(count);
    
    return answer;
}