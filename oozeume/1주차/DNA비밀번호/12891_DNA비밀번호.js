const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

// S -> 문자열 길이
// P -> 윈도우 사이즈
const [S, P] = input[0].map(Number)
const string = input[1].toString()
const [A, C, G, T] = input[2].map(Number);

let targetObj = { A, C, G, T }

let answer = 0;
let dnaObj = { A: 0, C: 0, G: 0, T: 0 }

// 첫번째 윈도우 세팅
for (let i = 0; i < P; i++) {
  if (['A', 'C', 'G', 'T'].includes(string[i])) {
    dnaObj[string[i]] += 1;
  }
}

if (Object.keys(targetObj).every(key => targetObj[key] <= dnaObj[key])) {
  answer += 1;
}

// 윈도우 탐색
for (let i = P; i < S; i++) {
  dnaObj[string[i - P]] -= 1;
  dnaObj[string[i]] += 1;

  if (Object.keys(targetObj).every((key) => targetObj[key] === dnaObj[key])) {
    answer += 1;
  }
}

console.log(answer)