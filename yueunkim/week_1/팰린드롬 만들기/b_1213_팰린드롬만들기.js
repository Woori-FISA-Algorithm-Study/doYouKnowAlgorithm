const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
let str = input[0];
let left = "";
let mid = "";
let count = 1;
let countArr = [];
let impossible = 0;
// let index = 0;

// 1. 사전순 정렬
// 2. 각 문자의 개수 체크
// 2-1. 개수가 홀수개인 문자가 2개 이상이면 I'm Sorry Hansoo
// 2-2. 팰린드롬 가능한 경우
// 2-2-1. 문자가 짝수개면 절반을 left에 넣기
// 2-2-2. 문자가 홀수개면 1개는 mid에 넣고 남은 절반은 left에 넣기
// 2-3. left+mid+left뒤집은거

function solution(str) {
  str = str.split("").sort().join("");

  // 각 문자 개수 체크
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      countArr.push(count);
      count = 1;
    }
  }

  // 홀수개인 문자가 2개 이상인지 확인
  countArr.forEach((e) => {
    if (e % 2 === 1) impossible++;
  });
  if (impossible > 1) return `I'm Sorry Hansoo`;

  let num = 0;

  countArr.forEach((e) => {
    num += e;
    let index = str.indexOf(str[num - 1]);
    // 홀수면
    if (e % 2 === 1) {
      mid += str[index];
    }

    for (let i = 0; i < Math.floor(e / 2); i++) {
      left += str[index];
      index++;
    }
  });

  return left + mid + left.split("").reverse().join("");
}

console.log(solution(str));
