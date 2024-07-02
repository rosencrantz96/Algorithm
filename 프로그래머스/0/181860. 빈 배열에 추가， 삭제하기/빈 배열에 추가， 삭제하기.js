function solution(arr, flag) {
    let answer = [];
    flag.forEach((v, i) => {
        if(v === true) {
            for (let j=0; j < arr[i] * 2; j++) {
                answer.push(arr[i])
            }
        } else {
            for (let k=0; k < arr[i]; k++)
                answer.pop()
        }
    })
    return answer;
}