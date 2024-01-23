const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split("").map(Number);
  map.push(row);
}

const dx = [-1, 1, 0, 0]; // 상, 하
const dy = [0, 0, -1, 1]; // 좌, 우

// 방문한 정점을 저장하기 위한 배열
let visited = Array.from(Array(n), () => Array(m).fill(0));

// BFS 함수
// function bfs(x, y) {
//   const queue = []; // 큐를 초기화

//   // 첫 번째 행의 모든 열을 시작점으로 설정
//   for (let i = 0; i < m; i++) {
//     if (map[0][i] === 0) {
//       queue.push([0, i]);
//       visited[0][i] = true;
//     }
//   }

//   while (queue.length > 0) {
//     const [x, y] = queue.shift(); // 큐에서 정점 하나 꺼내기

//     // 목표 지점에 도달했는지 확인
//     if (x === n - 1) {
//       return "YES";
//     }

//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       // 그래프 범위 내에 있고, 방문하지 않은 집이라면
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < n &&
//         ny < m &&
//         map[nx][ny] == 0 &&
//         visited[nx][ny] == false
//       ) {
//         // 큐에 추가
//         queue.push([nx, ny]);

//         // 방문 표시
//         visited[nx][ny] = true;
//       }
//     }
//   }
//   return "NO";
// }

// console.log(bfs(0, 0));

// DFS 함수
function dfs(x, y) {
  // 목표 지점에 도달했는지 확인
  if (x === n - 1) {
    return "YES";
  }

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    // 그래프 범위 내에 있고, 방문하지 않은 집이라면
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < n &&
      ny < m &&
      map[nx][ny] == 0 &&
      visited[nx][ny] == false
    ) {
      const result = dfs(nx, ny);
      if (result === "YES") {
        return "YES";
      }
    }
  }
  return "NO";
}

let result = "NO";
// 첫 번째 행의 모든 열을 시작점으로 설정
for (let i = 0; i < m; i++) {
  if (map[0][i] === 0 && !visited[0][i]) {
    result = dfs(0, i);
    if (result === "YES") {
      break;
    }
  }
}

console.log(result);
