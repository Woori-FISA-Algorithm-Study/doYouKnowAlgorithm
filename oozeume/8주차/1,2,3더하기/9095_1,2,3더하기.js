const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const T = Number(n); // 테스트케이스의 개수

const arr = [1, 2, 3];
// 이거 3개를 가지고 1개만 썼다가 2개만 썼다가 3개만 썼다가 구하는 반복문을 만들어야함

const dfs = (s, targetNum) => {
  if (s === targetNum) {
    return 1;
  }

  if (s > targetNum) {
    return 0;
  }

  let now = 0;
  for (let i = 1; i <= arr.length; i++) {
    now += dfs(s + i, targetNum)
  }
  return now;

}


for (let i = 0; i < T; i++) {
  const num = Number(input[i]);
  console.log(dfs(0, num))
}