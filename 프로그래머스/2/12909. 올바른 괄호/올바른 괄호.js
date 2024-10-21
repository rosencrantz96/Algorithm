function solution(s){
    let balance = 0;
    
    for (let str of [...s]) {
        if (str == '(') {
           balance += 1; 
        } else if (str == ')') {
            balance -= 1;
            if (balance < 0) return false;
        }
    }
    return balance == 0
}