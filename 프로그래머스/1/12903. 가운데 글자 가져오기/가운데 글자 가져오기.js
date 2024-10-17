function solution(s) {
    let length = s.length;
    let middleIndex = Math.floor(length/2);
    
    if (!(length % 2)) return s[middleIndex - 1] + s[middleIndex];
    else return s[middleIndex];
}