const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('')
  .sort(); // 배열 안에 정렬을 시켜서 input으로 받음

const charCount = new Map();
let answer = '';

console.log(input);

for (let char of input) {
  charCount.set(char, (charCount.get(char) || 0) + 1);
}

let front = [];
let center = '';

// 홀수인 개수가 1개 초과인 경우 
if (Array.from(charCount.values()).filter(count => count % 2 === 1).length > 1) {
  answer = "I'm Sorry Hansoo";
} else {
  // 홀수인 개수가 1개 이하인 경우
  while (input.length) {
    const first = input.shift(); // 첫번째요소 제거하고 반환
    const idx = input.indexOf(first);
    center = (idx === -1) ? first : center; // 중앙에 들어갈 문자 설정
    console.log('-->', front);
    front = (idx !== -1) ? [...front, first] : front; // 앞 부분에 추가
    input.splice(idx, (idx !== -1) ? 1 : 0); // 중복된 문자는 배열에서 제거
  }
  const back = [...front].reverse().join('');
  answer = front.join('') + center + back; // 팰린드롬 문자열이 되도록 합치기
}

console.log(answer);