const rightPush = (count, origin, compare) => {
    //  - 입력받은 원본 origin 배열을 복사하여 새 배열을 만들어서 작업한다 (변형 우려) 
    //  - 복사한 newOrigin 배열의 마지막 글자를 떼서 last에 저장한다
    //  - 마지막 글자를 맨 앞으로 붙여 새로운 배열을 만들고 count를 증가시킨다.
    //  - 만약 count가 origin을 초과하였다면 -1을 반환한다. 
    //  - recombination을 문자열로 합쳐서 compare과 비교해서 같다면 count를 반환하고 그렇지 않다면 다시 함수를 호출한다 (재귀!!! )
    let newOrigin = origin.slice();
    
    let last = newOrigin.pop();
    let recombination = [last, ...newOrigin];
    
    count++;
    
    if (count > origin.length) return -1;
    
    return recombination.join('') === compare ? count : rightPush(count, recombination, compare);
}


function solution(A, B) {
    // 1. 먼저 A와 B가 같은 경우를 제외하고 시작 (다른 계산 더 안 하도록)
    // 2. 대문자 짜증나니까 다른 변수에 할당
    // 3. 재귀함수를 만들어보자...

    if(A === B) return 0;
    const a = [...A], b = B;
    
    // 민 횟수를 저장할 변수 초기화 
    let count = 0; 
    
    return rightPush(count, a, b);
}