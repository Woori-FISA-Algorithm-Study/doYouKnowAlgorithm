const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const str = input[0]; // 단어

function solution(str) {
  str = str.toUpperCase();
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.has(str[i]) ? map.set(str[i], map.get(str[i]) + 1) : map.set(str[i], 1); // 글자별 개수 세기
  }

  // Map 객체의 모든 값으로 이루어진 배열을 생성
  let counts = Array.from(map.values());
  // 배열의 최댓값을 찾음
  let maxCount = Math.max(...counts);
  // 최댓값과 일치하는 키(문자) 찾기
  let maxChars = [];
  for (let [char, count] of map) {
    if (count === maxCount) {
      maxChars.push(char);
    }
  }

  if (maxChars.length != 1) return "?";
  else return maxChars[0];
}

console.log(solution(str));
