function solution(my_string, index_list) {
    return index_list.map((v) => { return v = my_string[v] }).join('');
}