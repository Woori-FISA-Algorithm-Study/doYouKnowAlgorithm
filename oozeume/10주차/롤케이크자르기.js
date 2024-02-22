// 롤케이크 두조각으로 잘라서 나누려고함
// 롤케이크 크기보다 토핑들의 종류에 더 관심
// 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나눠진 것
// 토핑의 종류가 2개로 나누었을 때 같아야합니다.

function solution(topping) {
  let answer = 0;

  let front = new Map([]);
  let back = new Map([]);

  // front 맵에 모든 토핑의 개수를 저장
  for (let i = 0; i < topping.length; i++) {
    if (front.has(topping[i])) {
      front.set(topping[i], front.get(topping[i]) + 1);
    } else {
      front.set(topping[i], 1);
    }
  }

  for (let i = topping.length - 1; i >= 1; i--) {
    const pick = topping[i];
    if (back.has(pick)) {
      back.set(pick, back.get(topping[i]) + 1)
    } else {
      back.set(pick, 1)
    }


    if (front.get(pick) > 1) {
      front.set(pick, front.get(pick) - 1);
    } else {
      front.delete(pick);
    }

    if (front.size === back.size) {
      answer += 1;
    }
  }

  return answer;
}