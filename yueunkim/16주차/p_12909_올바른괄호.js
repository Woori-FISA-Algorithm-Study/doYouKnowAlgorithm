function solution(s) {
  let stack = [];
  let answer = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else stack.pop();
  }
  if (stack.length === 0) answer = true;

  // 2,6번 틀림 -> 반례 : s="))"

  // () 개수 비교
  let left = 0;
  let right = 0;
  let answer2 = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;
  }
  if (left === right && answer == true) return true;
  else return false;
}
