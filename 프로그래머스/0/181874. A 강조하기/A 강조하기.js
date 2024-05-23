function solution(myString) {
    return [...myString].map((v) => {
        if (v==='a' || v==='A') return v.toUpperCase();
        else return v.toLowerCase();
    }).join('');
}