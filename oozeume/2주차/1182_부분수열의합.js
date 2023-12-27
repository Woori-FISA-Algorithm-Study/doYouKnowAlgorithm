const fs = require('fs')
const [n, input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n[0])
const S = Number(n[1])
const arr = input.split(' ').map(Number)

// N개의 정수로 이루어진 수열
// 크기가 양수인 부분수열 중에서 그 수열의 원소를 다 더한 값이 S가 되는 경우의 수 구하기
// 부분수열과 연속한 부분수열을 구분해야함
// 여기서는 그냥 부분수열만 언급했으므로 연속하지 않아도 됨

const solution = (N, S, arr) => {
  let cnt = 0;

  const recursion = (idx, sum) => { // idx는 트리의 깊이를 나타내기도함
    if (idx === N) {
      return;
    } else {
      sum += arr[idx]; // sum에 값을 더해주고
      if (sum === S) cnt++; // S와 sum이 같으면 카운팅

      recursion(idx + 1, sum); // 현재 값을 포함하고 다음 인덱스 계산 
      recursion(idx + 1, sum - arr[idx]); // 현재 값을 포함하지 않고 다음 인덱스 계산
    }
  };

  recursion(0, 0);
  return cnt
};

console.log(solution(N, S, arr)); 
