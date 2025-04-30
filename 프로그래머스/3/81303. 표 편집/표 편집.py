def solution(n, k, cmd):
    # 삭제된 행 저장 
    deleted = [ ]
    
    # 링크드리스트 흉내
    up = [i-1 for i in range(n+2)]
    down = [i+1 for i in range(n+1)]
    
    # 현재 행 
    k += 1
    
    for cmd_i in cmd:
        # 삭제 
        if cmd_i.startswith("C"):
            deleted.append(k)
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            k = up[k] if n < down[k] else down[k]
        # 복원
        elif cmd_i.startswith("Z"):
            restore = deleted.pop()
            down[up[restore]] = restore
            up[down[restore]] = restore
        # 위치이동
        else: 
            action, num  = cmd_i.split()
            if action == "U":
                for _ in range(int(num)):
                    k = up[k]
            else:
                for _ in range(int(num)):
                    k = down[k]
    answer = ["O"] * n
    for i in deleted:
        answer [i - 1] = "X"
    
    return "".join(answer)
                    
