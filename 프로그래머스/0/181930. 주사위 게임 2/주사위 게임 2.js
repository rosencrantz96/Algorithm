function solution(a, b, c) {
    let pow2 = (a, b, c) => {
        return Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    };
    let pow3 = (a, b, c) => {
        return Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    };
    
    let answer = 0;
    if(a == b && b == c) {
        console.log('case 1 모두 같은 수')
        answer = (a+b+c) * pow2(a, b, c) * pow3(a, b,c);
    } else if (a == b || a == c || b == c) {
        console.log('case 2 두 개만 같은 수')
        answer = (a+b+c) * pow2(a, b, c);
    } else {
        console.log('case 3 모두 다른 수')
        answer = a + b + c;
    }
    return answer;
}