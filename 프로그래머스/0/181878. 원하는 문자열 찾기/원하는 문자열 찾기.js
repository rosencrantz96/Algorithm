function solution(myString, pat) {
    return myString.toLocaleLowerCase().includes(pat.toLocaleLowerCase()) ? 1 : 0;
}