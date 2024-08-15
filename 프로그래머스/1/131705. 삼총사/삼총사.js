function solution(number) {
    let result = 0;
    
    // 3개의 숫자를 조합하는 함수를 재귀적으로 만들어보자... 
    const combination = (current, start) => {
        // 현재 배열의 길이가 3이 되면 
        if (current.length === 3) {
            // 합을 구해서 0일 경우 result += 1, 아니면 걍 빠이 
            result += current.reduce((a, c) => a + c, 0) === 0 ? 1 : 0;
            return;
        }
        
        for (let i = start; i <number.length; i++) {
            // current배열 복사본에 number[i]를 추가해서 combination 함수를 재귀적으로 호출 
            // i+1을 start에 전달해서 다음에 선택할 숫자 인덱스 업데이트 
            combination([...current, number[i]], i+1);
        }
    }
    
    combination([], 0);
    return result;
}