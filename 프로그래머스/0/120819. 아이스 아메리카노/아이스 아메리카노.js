function solution(money) {
    console.log(typeof money)
    // const newMoney = Number(money.replaceAll(',', ''));
    // const newMoney = money.replace(/,/g, '')
    return [Math.floor(money/5500), money%5500];
}