function solution(arr1, arr2) {
    return arr1.map((a1, i) => {
        return a1.map((a2, j) => {
            return a2 + arr2[i][j]
        })
    })
}