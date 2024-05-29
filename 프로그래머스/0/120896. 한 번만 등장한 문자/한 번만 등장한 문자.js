function solution(s) {
    // s에 몇 번 등장하는지 세어주는 함수
    let counting = (str) => {
        let result = 0;
        for(let i=0; i<s.length; i++) {
            if (s[i] == str) result++;
        }
        return result;
    }
    
    let rep = Array.from(new Set(s));
    let repCnt = rep.map((v) => { return v = counting(v) });

    let result = rep.filter((v, i) => repCnt[i] ==1).sort().join('')
    
    return result; 
} 