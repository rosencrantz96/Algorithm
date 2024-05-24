function solution(n) {
    const calc = (n) => {
        let answer = 0;
        if (n % 2 != 0) {
            for (let i=1; i<=n; i += 2) {
                console.log(i)
                answer += i;
            }
            return answer;
        } else {
            for (let i=0; i<=n; i += 2) {
                answer += Math.pow(i, 2)
            }
            return answer;
        }
    }
    return calc(n);
}