from functools import reduce

def solution(num_str):
    return reduce(lambda x, y: int(x) + int(y), num_str)