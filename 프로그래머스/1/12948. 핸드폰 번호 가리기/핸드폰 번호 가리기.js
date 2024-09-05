function solution(phone_number) {
    return [...phone_number].map((v, i) => {
        if (i < phone_number.length - 4) return v = '*'
        return v;
    }).join('');
}