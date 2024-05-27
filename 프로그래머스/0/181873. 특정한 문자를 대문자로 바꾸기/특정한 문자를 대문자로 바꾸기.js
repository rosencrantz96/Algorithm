function solution(my_string, alp) {
    let result = [];
    result = [...my_string].map((v) => {
        if (v === alp) return v.toUpperCase();
        return v;
    }).join('');
    return result;
}