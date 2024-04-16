function solution(a, d, included) {
    return included.reduce((acc, cur, i) => {
        // 현재 요소가 true일 경우
        if (cur == true) {
            // 등차수열의 합 구하기 
            const sum = a + i * d;
            return acc + sum;
        }
        // false면 그냥 acc 리턴 
        return acc;
    }, 0)
}