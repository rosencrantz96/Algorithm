const resort = (arr) => {
    let [a, b, c, d] = arr;
    
    if (a === b && b === c && c === d) {
        return 'case1'; // 네 개의 주사위가 모두 같은 경우
    } else if (a === b && b === c) {
        return 'case2-1'; // 세 개의 주사위가 같은 경우
    } else if (b === c && c === d) {
        return 'case2-2'; // 세 개의 주사위가 같은 경우
    } else if (a === b && c === d) {
        return 'case3'; // 두 개씩 같은 경우
    } else if (a === b || b === c || c === d) {
        return 'case4'; // 두 개만 같은 경우
    } else {
        return 'case5'; // 모두 다른 경우
    }

    // if (b === c && c === d) {
    //     if (b === a) return 'case1';
    //     return 'case2-2';
    // } else if (b === a) {
    //     if (c === a) return 'case2-1';
    //     else if (c === d) return 'case3';
    //     else return 'case4';
    // } else return 'case5';
}

function solution(a, b, c, d) {
    let answer = 0;
    let dice = [a, b, c, d];
    dice.sort((a, b) => a - b);
    console.log(dice)
    console.log(resort(dice))
    
    switch(resort(dice)) {
        case 'case1':
            // 주사위 눈이 모두 같음 
            answer = 1111 * dice[0];
            break;
        case 'case2-1':
            // 주사위 눈이 하나 빼고 다 같음 (ex.1, 1, 1, 4)
            answer = (10 * dice[0] + dice[3]) ** 2;
            break;
        case 'case2-2':
            // 주사위 눈이 하나 빼고 다 같음 (ex. 1, 4, 4, 4)
            answer = (10 * dice[3] + dice[0]) ** 2;
            break;
        case 'case3':
            // 주사위 눈이 두 개씩 같음 
            answer = (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);
            break;
        case 'case4':
            // 주사위 눈이 두 개만 같고 나머진 다 다름 (ex. 2, 2, 5, 6)
            if (dice[0] === dice[1]) {
                answer = dice[2] * dice[3];
            } else if (dice[1] === dice[2]) {
                answer = dice[0] * dice[3];
            } else {
                answer = dice[0] * dice[1];
            }
            break;
        case 'case5':
            // 주사위 눈이 모두 다름 
            answer = dice[0];
            break;
    }
    return answer;
}