function solution(age) {
    let answer = '';
    
    const stringSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const ageArr = age.toString().split('');
    
    for (let i=0; i<ageArr.length; i++) {
        answer += stringSet[ageArr[i]]
    } 
    
    return answer;
}