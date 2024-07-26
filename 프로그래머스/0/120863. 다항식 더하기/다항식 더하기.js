function solution(polynomial) {
    // 1. 공백 제외한 배열 만들기
    let poly = polynomial.split(' ');
    
    // 2. x항(...)끼리의 합, 숫자항끼리의 합을 담을 변수 선언
    let xhang = 0;
    let numhang = 0;
    
    // 3. 배열을 돌면서 x와 숫자 구분하여 합을 구하기
    for(let el of poly) {
        if (el.includes('x')) {
            // x항 처리
            let removex = el.replace('x', '');
            xhang += (removex === '' ? 1 : +removex);
        } else if (!isNaN(el)) {
            // 숫자항 처리
            numhang += +el;
        }
    }
    
    // 4. 결과 문자열 만들기 
    let result = '';
    if (xhang !== 0) {
        result += (xhang === 1 ? '' : xhang) + 'x';
    }
    
    if (numhang !== 0) {
        if (result) result += ' + ';
        result += numhang
    }
    return result;
}