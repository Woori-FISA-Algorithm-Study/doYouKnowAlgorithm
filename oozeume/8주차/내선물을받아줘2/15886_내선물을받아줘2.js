const fs = require('fs');
const [n, input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

const N = Number(n);
const arr = input.split('')

let point = 0;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] === 'E' && arr[i + 1] === 'W') {
    point += 1;
  }
}

console.log(point);
