function solution(s){
    let p = s.toLowerCase().split('').filter(v => v==='p').length;
    let y = s.toLowerCase().split('').filter(v => v==='y').length;
    console.log(p, y)
    
    return p != y ? false : true;
}