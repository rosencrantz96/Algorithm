function solution(num_list) {
    let find = num_list.findIndex(v => v<0);
    
    return find >= 0 ? find : -1;
}