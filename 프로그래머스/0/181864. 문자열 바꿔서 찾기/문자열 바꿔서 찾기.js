function solution(myString, pat) {
    let change = [...myString].map((v) => {
        if (v === 'A') return 'B';
        if (v === 'B') return 'A'
    }).join('');
    console.log(change)
    
    return change.includes(pat) ? 1 : 0;
}