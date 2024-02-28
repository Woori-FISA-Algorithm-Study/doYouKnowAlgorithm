// 1. 뒤에 있는 숫자들과 크기 비교해서 뒷 숫자가 더 크면 moreBig에 넣기
// 2. moreBig의 길이가 0보다 크면 (뒤에 더 큰 숫자가 있으면) 첫번째 요소를 answer에 넣기
// 3. moreBig의 길이가 0이면 (뒤에 더 큰 숫자가 없으면) -1을 answer에 넣기

function solution(numbers) {
  let answer = [];
  let moreBig = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) moreBig.push(numbers[j]);
    }
    if (moreBig.length > 0) answer.push(moreBig[0]);
    else answer.push(-1);
    moreBig = [];
  }

  answer.push(-1); // 맨 마지막 숫자는 뒤에 숫자가 없으므로 -1 추가

  return answer;
}

// 7번까지만 통과, 나머지는 시간초과
