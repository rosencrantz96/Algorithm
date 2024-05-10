function solution(str_list) {
    let left = str_list.findIndex((v) => v === 'l');
    let right = str_list.findIndex((v) => v === 'r');
    
    if (left == -1 && right == -1) return [];
    else if (left !== -1 && (left < right || right === -1)) return str_list.slice(0, left);
    else return str_list.slice(right +1);
}