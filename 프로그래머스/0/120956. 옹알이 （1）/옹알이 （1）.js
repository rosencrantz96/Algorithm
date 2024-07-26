function solution(babbling) {
    /*
    1. babbling을 순회
    2. 각 요소마다 조카가 발음할 수 있는 모든 단어를 빈문자열로 바꾼다 (정규표현식 사용)
    3. 해당 요소가 빈 문자열이 되면 count를 올린다. 
    */
    const test = /aya|ye|woo|ma/g;
    return babbling.reduce((count, word) => {
        word = word.replace(test, '');
        if (word === '') count++;
        
        return count;
    }, 0)
    
    
}