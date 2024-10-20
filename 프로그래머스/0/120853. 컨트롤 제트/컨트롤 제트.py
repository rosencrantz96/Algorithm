def solution(s):
    # 문자열을 공백으로 나누기 
    elements = s.split(' ')
    # 최종 값을 담을 변수 선언
    total = 0 
    # 마지막 숫자 
    last_number = 0
    
    for element in elements:
        # 숫자일 경우 
        if element.isdigit() or (element[0] == '-' and element[1:].isdigit()):
            # last_number 다시 선언 
            last_number = int(element)
            # total에 더해주기 
            total += last_number
        # 'Z'가 나올 경우 
        elif element == 'Z':
            # total에서 직전에 선언된 last_number 빼기 
            total -= last_number
    
    return total