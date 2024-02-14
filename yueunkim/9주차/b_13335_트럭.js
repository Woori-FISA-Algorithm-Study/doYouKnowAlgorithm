const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, w, l] = input[0].split(" ").map(Number);
const truck = input[1].split(" ").map(Number);

function solution(w, l, truck) {
  let bridge = Array(w).fill(0); // 다리
  let time = 0; // 경과 시간

  // 대기 트럭이 없을 때까지
  while (truck.length >= 1) {
    bridge.shift();

    // 현재 bridge 위의 트럭 무게와 다음 트럭의 무게 합이 l보다 작거나 같으면
    if (bridge.reduce((a, b) => a + b, 0) + truck[0] <= l) {
      bridge.push(truck.shift());
      time++;
    } else {
      bridge.push(0);
      time++;
    }
  }

  return time + w;
}

console.log(solution(w, l, truck));
