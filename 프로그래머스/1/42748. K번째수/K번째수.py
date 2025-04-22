def solution(array, commands):
    result = []
    
    for i, j, k in commands: 
        sliced_array = array[i-1:j]
        sliced_array.sort()
        result.append(sliced_array[k-1])
        
    return result