function solution(array) {
    let counting = new Map();
    for (let i = 0; i < array.length; i++) {
        if (!counting.has(array[i])) {
            counting.set(array[i], 1);
        } else if (counting.has(array[i])) {
            counting.set(array[i], counting.get(array[i]) + 1);
        }
    }

    let maxCount = 0;
    let modes = [];

    counting.forEach((count, number) => {
        if (count > maxCount) {
            maxCount = count;
            modes = [number];
        } else if (count === maxCount) {
            modes.push(number);
        }
    });

    if (modes.length > 1) {
        return -1;
    } else return modes[0];
}