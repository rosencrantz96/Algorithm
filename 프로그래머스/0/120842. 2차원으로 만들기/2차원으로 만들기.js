function solution(num_list, n) {
    /*
    1. 정답을 담을 빈 배열 선언
    2. num_list를 순회하면서 n개씩 잘라낸 배열을 정답 배열에 넣어주기
    */
    
    let answer = [];
    
    for (let i=0; i<num_list.length; i+=n) {
        answer.push(num_list.slice(i, i+n))
    }
    
    return answer;
}