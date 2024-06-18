function solution(binomial) {
    let arr = binomial.split(' ');
    return arr.filter((v) => !isNaN(v)).map((v) => Number(v))
            .reduce((a, c) => {
                if(arr[1] === '+') return a += c;
                else if(arr[1] === '-') return a -= c;
                else return a *= c;
            })
}