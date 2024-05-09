function solution(arr) {
    if (arr.length == arr[0].length) return arr;
    else if (arr.length > arr[0].length) {
        arr.map((v, i) => {
            while (arr[i].length < arr.length) {
                arr[i].push(0);
            }
        });
        return arr;
    } else {
        arr.map((v, i) => {
            while (arr[i].length > arr.length) {
                arr.push(Array(arr[i].length).fill(0));
            }
        });
        return arr;
    }
}