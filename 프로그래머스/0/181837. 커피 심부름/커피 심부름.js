function solution(order) {
    let reg = /cafelatte/g;
    let latteCnt = 0;
    for (let i = 0; i < order.length; i++) {
        if (order[i].match(reg)) {
             latteCnt++;
        }
    }
    return latteCnt * 5000 + (order.length - latteCnt) * 4500;
}