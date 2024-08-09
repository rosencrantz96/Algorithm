const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let split = str.split('');
    let result = [];

    for (let i of split) {
        if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
            // 대문자일 경우
            result.push(i.toLowerCase());
        } else {
            // 소문자일 경우
            result.push(i.toUpperCase());
        }
    }
    
    console.log(result.join(''));
});