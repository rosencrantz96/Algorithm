function solution(id_pw, db) {
    let result = 'fail';
    
    db.forEach((member) => {
        if(id_pw[0] === member[0]) {
            if (id_pw[1] === member[1]) result = 'login'
            else result = 'wrong pw'
        }
    });
    
    return result;
}