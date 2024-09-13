function solution(a, b) {
    let result = [];
    let length = a.length;

    for(let i=0; i<= length-1; i++) {
        result.push(a[i]*b[i]);
    }
    
    return result.reduce((a, c) => { return a+=c }, 0) 
}