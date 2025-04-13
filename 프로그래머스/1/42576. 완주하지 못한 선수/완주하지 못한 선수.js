function solution(participant, completion) {
    let map = new Map();
    
    for (let i=0; i<participant.length; i++) {
        let name = participant[i];
        map[name] = (map[name] || 0) + 1;
    }
    
    for (let i=0; i<completion.length; i++) {
        let name = completion[i];
        map[name] -= 1;
    }
    
    for (let name in map) {
        if (map[name] > 0) return name
    }
}