const fs = require('fs')
const [str1, str2] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')

let cnt = 0

const lenX = str1.length;
const lenY = str2.length;

// 결과값을 저장할 2차원 dp 필요
dp = new Array(lenX + 1).fill(0).map(() => new Array(lenY + 1).fill(0));
// 동일한 식 => Array.from({ length: lenX + 1 }, () => Array(lenY + 1).fill(0));


for (let i = 1; i <= lenX; i++) {
  for (let j = i; j < lenY; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

}
// console.log(dp[lenX][lenY]);
console.log(dp[lenX - 1][lenY - 1]);


for (let i = 0; i < dp.length; i++) {

}
