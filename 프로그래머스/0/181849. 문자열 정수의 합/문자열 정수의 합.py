def solution(num_str):
    nums = []
    sum = 0
    
    for i in range(len(num_str)):
        nums.append(int(num_str[i]))
        
    for i in range(len(nums)):
        sum += nums[i]

    return sum
    