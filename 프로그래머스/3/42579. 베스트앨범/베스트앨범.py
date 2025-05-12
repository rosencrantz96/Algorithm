def solution(genres, plays):
    answer = [ ]
    genre_dict = { }
    play_dict = { }
    
    # 데이터 정렬 
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        if genre not in genre_dict:
            genre_dict[genre] = [ ]
            play_dict[genre] = 0
        genre_dict[genre].append((i, play))
        play_dict[genre] += play
    # print(genre_dict)
    # print(play_dict)
    
    # 내림차순으로 정렬 
    sorted_genre = sorted(play_dict.items(), key = lambda x: x[1], reverse=True)
    # print(sorted_genre)
    
    for genre, _ in sorted_genre:
        sorted_songs = sorted(genre_dict[genre], key = lambda x: (-x[1], x[0]))
        answer.extend([idx for idx, _ in sorted_songs[:2]])
        
    return answer

    
    
    
