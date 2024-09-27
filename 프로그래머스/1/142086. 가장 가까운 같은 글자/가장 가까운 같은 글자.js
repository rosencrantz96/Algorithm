function solution(s) {
    let result = [];
    let cur = [];
    
    for(let i=0; i<s.length; i++) {
        if(!cur.includes(s[i])) {
            result.push(-1);
            cur.push(s[i]);
        } else if (cur.includes(s[i])) {
            result.push(i - cur.lastIndexOf(s[i]));
            cur.push(s[i]);
        }
    }
    
    return result;
}