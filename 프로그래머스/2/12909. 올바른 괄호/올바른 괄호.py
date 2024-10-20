def solution(s):
    balance = 0 
    for char in s:
        if char == '(':
            balance += 1
        elif char == ')':
            balance -= 1
        # 닫는 괄호를 만났을 때 바로 balance 검사 
        # 여기서 불균형 먼저 감지 
        if balance < 0:
            return False
    
    return balance == 0 