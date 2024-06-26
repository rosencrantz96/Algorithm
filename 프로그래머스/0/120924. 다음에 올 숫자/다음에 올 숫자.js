function solution(common) {
    let diff1 = common[1] - common[0];
    let diff2 = common[2] - common[1];
    
    let ratio = common[1] / common[0]

    return diff1 === diff2 ? common.at(-1) + diff1 : common.at(-1) * ratio; 
}