// 1. 귤의 빈도수 세기
// 2. 내림차순 정렬
// 3. k에서 빼기

function solution(k, tangerine) {
  // 귤 빈도수 Map에 저장
  const tan = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    const target = tan.get(tangerine[i]);
    tan.set(tangerine[i], target ? target + 1 : 1);
  }

  // values만 추출
  let values = Array.from(tan.values());

  // 내림차순 정렬
  let answer = values.sort((a, b) => b - a);
  console.log(answer);

  // k에서 빼기
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    if (k > 0) {
      k = k - answer[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}
