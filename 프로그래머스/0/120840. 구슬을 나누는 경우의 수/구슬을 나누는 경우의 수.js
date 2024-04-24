const getFac = (num) => {
    let answer = 1;
    for (let i=1; i<= num; i++) {
        answer *= i;
    }
    return answer;
}

function solution(balls, share) {
    let numer = getFac(balls);
    let denom = getFac(balls - share) * getFac(share);
    
    return Math.round(numer / denom);
}