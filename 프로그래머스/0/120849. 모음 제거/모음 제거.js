function solution(my_string) {
    const strArr = ['a', 'e', 'i', 'o', 'u'];
    let newString = my_string;
    for (let i=0; i<strArr.length; i++) {
        newString = newString.replaceAll(strArr[i], '')
    }
    return newString;
}