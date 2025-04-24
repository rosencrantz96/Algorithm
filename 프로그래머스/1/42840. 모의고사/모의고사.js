function solution(answers) {
    let patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    let scores = [0, 0, 0]
    
    for (let i=0; i<answers.length; i++) {
        let answer = answers[i];
        
        for (let j=0; j<patterns.length; j++) {
            let pattern = patterns[j]
            let studentAnswer = pattern[i % pattern.length]
            
            if (studentAnswer === answer) scores[j]++;
        }
    }
    
    let maxScore = Math.max(...scores);
    
    let result = [];
    for (let i=0; i<scores.length; i++) {
        if (scores[i] === maxScore) result.push(i+1);
    }
    
    return result.sort((a, b) => a - b);
}