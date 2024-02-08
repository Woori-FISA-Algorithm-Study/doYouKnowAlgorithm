const fs = require('fs');
const str = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

let arr = str.split('');
const duck = ['q', 'u', 'a', 'c', 'k'];
let visited = Array.from({ length: arr.length }, () => false);

const solution = (arr) => {
  let cnt = 0;
  let index = 0;
  // 첫번째 요소인지 아닌지 판단    
  let first = true;

  if (arr.length % 5 !== 0) {
    return -1
  } else {
    // arr의 길이만큼 반복문 돌림
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'q' && visited[i] === false) {
        first = true;

        // 시작지점인 경우에만 반복문 시작
        for (let j = i; j < arr.length; j++) {
          if (duck[index] === arr[j] && visited[j] === false) {
            visited[j] = true;

            if (arr[j] === 'k') {
              // 처음부터 시작해서 k로 끝난 경우
              if (first) {
                cnt += 1
                first = false;
              }
              index = 0;
              continue;
            }
            index += 1;
          }
        }
      }
    }
    if (cnt === 0 || visited.includes(false)) {
      return -1
    } else {
      return cnt
    }
  }
}

console.log(solution(arr));
