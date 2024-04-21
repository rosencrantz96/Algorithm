function solution(numbers, direction) {
    if(direction === 'right') {
        let lastIndex = numbers.length - 1;
        numbers.unshift(numbers[lastIndex]);
        numbers.pop();
    } else if (direction === 'left') {
        numbers.push(numbers[0]);
        numbers.shift();
    }
    return numbers;
}