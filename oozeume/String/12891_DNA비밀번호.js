const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const [S, P] = input[0].map(Number)
const DNA = input[1].toString()
const [A, C, G, T] = input[2].map(Number);

