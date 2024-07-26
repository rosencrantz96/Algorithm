function solution(absolutes, signs) {
    return signs.reduce((acc, cur, i) => {
        
        if(!cur) acc -= absolutes[i];
        else acc += absolutes[i];

        return acc;
    }, 0);
}