function solution(ineq, eq, n, m) {
    n = parseInt(n);
    m = parseInt(m);
    const condition = ineq + eq;
    
    switch (condition) {
        case '>!':
            return n > m ? 1 : 0;
        case '<=':
            return n <= m ? 1 : 0;
        case '>=':
            return n >= m ? 1 : 0;
        case '<!':
            return n < m ? 1 : 0;
        default:
            return 0;
    }
}