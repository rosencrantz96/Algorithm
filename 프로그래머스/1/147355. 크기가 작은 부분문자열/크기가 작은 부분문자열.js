function solution(t, p) {
    return Array.from({ length: t.length - p.length + 1}, (_, i) =>  t.slice(i, i + p.length))
        .filter(v => +v <= +p).length;
    
}