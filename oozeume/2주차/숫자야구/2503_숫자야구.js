const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n')
// .map((v) => v.split(' '));

const n = input[0]
let answer = []
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// 순열 구하는 함수
const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

// Ball인지 확인해주는 함수
const isBall = (hint) => {

}

// Strike인지 확인해주는 함수
const isStrike = () => {

}


// 세자리수 모두 다 만들어서 순열로 만들어서
// for문 안에 있는 조건식으로 검열해서 조건 충족하는 애들만 answer배열에 담아야하나??
const _numbers = getPermutations(numbers, 3)


for (let i = 1; i < input.length; i++) {
  const [num, strike, ball] = input[i].split(' ')
  // 1. strike와 ball의 수를 확인한다.
  const S = Number(strike)
  const B = Number(ball)
  const output = []
  // 2. 순열로 숫자 만들어놓는다.
  isBall(num)

  // 3. 만든 순열을 가지고 S, B 조건식을 준다
}

