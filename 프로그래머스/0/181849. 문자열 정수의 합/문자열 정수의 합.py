from functools import reduce

def solution(num_str):
    return reduce(lambda acc, cur: int(acc) + int(cur), num_str, 0)