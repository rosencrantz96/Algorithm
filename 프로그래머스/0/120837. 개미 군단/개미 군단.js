function solution(hp) {
    let general = 0;
    let army = 0; 
    let worker = 0;
    
    general = Math.floor(hp / 5);
    army = hp % 5 >= 3 ? Math.ceil((hp - general * 5) / 3) : 0;
    worker = hp % 5 < 3 ? hp - general * 5 : 0;
    
    return general + army + worker;    
}