function solution(numbers) {
    return numbers.map((el, i) => {
        return (numbers[i] = el * 2)
    })
}