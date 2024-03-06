// 1. 오름차순 정렬
// 2. 첫번째수를 min1, 두번째수를 min2
// 3. 스코빌지수 계산 후 새로운 값 push, 오름차순 정렬
// 4. 첫번째 수가 k보다 작을 때까지 반복

// 첫시도 -> 일부만 통과 -> 배열 요소가 1개인 경우 추가 -> 테스트는 맞는데 시간초과ㅠㅠ


function solution(scoville, K) {
    let count = 0;
    
    // 오름차순으로 정렬
    scoville.sort((a, b) => a - b); 

    // 가장 낮은 스코빌 지수가 목표 스코빌 지수 K 미만인 동안
    while(scoville[0] < K) {
        
        // 스코빌 지수 배열에 한 개의 요소만 있으면 -1 반환
        if(scoville.length === 1) return -1; 

        let min1 = scoville.shift();
        let min2 = scoville.shift();
        scoville.push(min1 + (min2 * 2));
        scoville.sort((a, b) => a - b);
        count++;
    }

    return count;
}
