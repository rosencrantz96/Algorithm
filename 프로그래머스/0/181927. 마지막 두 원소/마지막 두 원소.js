function solution(num_list) {
    let last = num_list[num_list.length - 1];
    let compNum = num_list[num_list.length - 2];
    
    last > compNum ? num_list.push(last - compNum) : num_list.push(last * 2)

    return num_list;
}