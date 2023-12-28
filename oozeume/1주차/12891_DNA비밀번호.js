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

const check = () => {
  if
}

const dict = { A: 0, C: 0, G: 0, T: 0 };

let cnt = 0
for (let i = 0; i < P; i++) {
  dict[DNA[i]] += 1;
}



cnt = check() === true ? cnt + 1 : cnt