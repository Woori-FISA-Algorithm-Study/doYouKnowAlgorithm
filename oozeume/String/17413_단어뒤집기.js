const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

let stack = [] // 문자 담는 스택
let strings = []
let word = ''

for (let i = 0; i < input.length; i++) {
  // 1. stack에 괄호가 없다면
  if (stack.length === 0) {
    // 1(1).input[i]번째 요소 - 여는 괄호인 경우
    if (input[i] === '<') {
      if (word !== '') {
        strings.push(word)
        word = ''
      }
      stack.push('<')
      strings.push(input[i])
    }
    // 1(2).input[i]번째 요소 - 공백인 경우
    else if (input[i] === ' ') {
      strings.push(word + ' ')
      word = ''
    }
    // 1(3).input[i]번째 요소 - 문자인 경우
    else {
      word = input[i] + word
    }
  }
  // 2. stack에 괄호가 있다면
  else {
    // 2(1). 괄호가 닫는 괄호인 경우
    if (input[i] === '>') {
      stack.pop()
      strings.push(input[i])
    }
    // 2(2).여는 괄호인 경우
    else {
      strings.push(input[i])
    }
  }
}

if (word !== '') {
  strings.push(word)
}

console.log(strings.join(''));
