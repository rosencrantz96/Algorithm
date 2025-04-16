function solution(clothes) {
    let clothesMap = {};
    
    clothes.forEach(([name, type]) => {
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    })
    
    return Object.values(clothesMap).reduce((acc, count) => acc * (count + 1), 1) - 1;
}