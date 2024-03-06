// moreBig 배열에 모든 큰 수를 담는 것이 아니라 numbers[i] 이후의 수를 차례로 검사하고
// numbers[i]보다 큰 수를 만나면 즉시 answer에 넣고 루프 종료하도록

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      answer.push(-1);
    }
  }
  return answer;
}
// 19번까지만 통과, 나머지는 시간초과

// 스택 사용
// 현재 수(num)보다 작은 수들을 스택에서 제거하고, 해당 위치에 현재 수(num)를 저장
function solution(numbers) {
  let stack = [];
  let answer = Array(numbers.length).fill(-1);

  numbers.forEach((num, i) => {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < num) {
      answer[stack.pop()] = num;
    }
    stack.push(i);
  });

  return answer;
}
