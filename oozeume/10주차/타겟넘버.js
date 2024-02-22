function solution(numbers, target) {
  let answer = 0;

  const dfs = (index, value) => {

    const operators = ['-', '+'];
    if (index === numbers.length) {
      if (value === target) {
        answer += 1
      }
      return;
    } else {
      dfs(index + 1, value - numbers[index])
      dfs(index + 1, value + numbers[index])
    }
  }
  dfs(0, 0)
  return answer;
}