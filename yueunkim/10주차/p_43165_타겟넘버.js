function solution(numbers, target) {
  let answer = 0;

  //깊이 우선 탐색
  function DFS(i, sum) {
    //numbers의 모든 원소를 탐색한 경우
    if (i === numbers.length) {
      //sum이 target과 같은 경우 답+1
      if (sum === target) answer++;
    } else {
      //원소를 더한 경우
      DFS(i + 1, sum + numbers[i]);

      //원소를 뺀 경우
      DFS(i + 1, sum - numbers[i]);
    }
  }

  DFS(0, 0);
  return answer;
}
