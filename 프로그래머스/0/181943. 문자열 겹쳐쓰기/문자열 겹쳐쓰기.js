function solution(my_string, overwrite_string, s) {
    let result = [...my_string]
   .splice(0, s)
   .concat([...overwrite_string], [...my_string].splice(s + overwrite_string.length))
   .join('');
    
    return result
}