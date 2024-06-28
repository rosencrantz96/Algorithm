function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let comA = Math.abs(a - n);
        let comB = Math.abs(b - n);
        
        if(comA == comB) {
            return b - a;
        } else {
            return comA  > comB ? 1 : -1;
        }
    })
}