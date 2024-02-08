const fs = require('fs');
const [n, input] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const [L, C] = n.split(' ').map(Number);
const arr = input.split(" ").sort();
let visited = Array.from({ length: arr.length }, () => false);

// 만들어야하는 암호의 길이 -> L
// 사용할 수 있는 알파벳 모음 -> arr
// C개 중에 L개로 조합 만들기

const check = (password) => {
  // 최소 1개의 모음을 가지고있고, 최소 2개의 자음을 포함하는지 확인해줘야함
  // 처음에 이 조건 확인 안해줘서 틀렸음
  let mo = 0;
  let ja = 0;

  for (let x of password) {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      mo += 1
    } else {
      ja += 1
    }
  }
  if (mo >= 1 && ja >= 2) {
    return true
  } else {
    return false;
  }
}

const dfs = (index, begin, password) => {
  if (index === L || password.length === L) {
    // L개 자리 다 채웠으면 종료
    if (check(password)) {
      console.log(password.join(''));
      return;
    }
  } else {
    for (let i = begin; i < arr.length; i++) {
      password.push(arr[i]);
      dfs(index + 1, i + 1, password);
      password.pop();
    }
  }
}

dfs(0, 0, [])