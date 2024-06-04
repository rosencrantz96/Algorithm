function solution(numLog) {
    change = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    
    return numLog.reduce((acc, cur, i, arr) => {
        if(i === arr.length -1) return acc;
        let diff = arr[i+1] - arr[i];
        let findKey = Object.keys(change);
        cur = findKey.find((key) => change[key] == diff);
        return acc += cur;
    }, '')
}