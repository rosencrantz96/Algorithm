function solution(nums) {
    let pokeMap = new Map();
    let carring = nums.length / 2;
    
    for (let i=0; i<nums.length; i++) {
        let number = nums[i];
        pokeMap.set(number, (pokeMap.get(number) || 0) + 1);
    }
    
    return Math.min(pokeMap.size, carring)
}