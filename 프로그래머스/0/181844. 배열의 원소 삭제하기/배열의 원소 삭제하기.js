function solution(arr, delete_list) {
    return arr.filter((v, i) => {
        return !delete_list.includes(v)
    })
}