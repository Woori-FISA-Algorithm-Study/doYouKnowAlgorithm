const fs = require('fs');
const [n, ...input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n); // 인원수
let answer = 0

let leftList = []

for (let i = 0; i < N; i++) {
  const list = input[i].split(' ').map(Number);
  if (list.length === 1) {
    // 0인 경우
    if (leftList.length > 0) {
      // 1) 이전에 하던 과제가 있는 경우
      let [score, time] = leftList.pop()
      time -= 1
      if (time === 0) {
        answer += score
      } else {
        leftList.push([score, time])
      }
    }
  } else {
    // 오늘 주어진 과제가 있는 경우
    list[2] -= 1

    if (list[2] === 0) {
      answer += list[1]
    } else {
      leftList.push([list[1], list[2]]);
    }
  }
}

console.log(answer);