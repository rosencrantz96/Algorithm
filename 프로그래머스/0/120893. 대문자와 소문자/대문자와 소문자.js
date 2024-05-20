function solution(my_string) {
    return [...my_string].map((v) => {
        return v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()
    }).join('')
}