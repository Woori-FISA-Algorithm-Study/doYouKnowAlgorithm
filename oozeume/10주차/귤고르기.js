function solution(k, tangerine) {
  let answer = 0;
  // for문 한번밖에 못돌겠다
  let list = new Map([]);
  for (let i = 0; i < tangerine.length; i++) {
    if (list.has(tangerine[i])) {
      list.set(tangerine[i], list.get(tangerine[i]) + 1)
    } else {
      list.set(tangerine[i], 1)
    }
  }
  let arr = []
  for ([key, value] of list) {
    arr.push([key, value])
  }
  arr.sort((a, b) => b[1] - a[1])
  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) {
      break;
    } else {
      k -= arr[i][1];
      answer += 1;
    }

  }
  return answer;
}