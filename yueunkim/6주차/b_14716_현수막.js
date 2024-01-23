const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(" ").map(Number);
  map.push(row);
}

const dx = [-1, 1, 0, 0, -1, -1, 1, 1]; // 상, 하, 왼위, 오위, 왼아, 오아
const dy = [0, 0, -1, 1, -1, 1, -1, 1]; // 좌, 우

// 방문한 정점을 저장하기 위한 배열
let visited = Array.from(Array(n), () => Array(m).fill(0));
let result = 0;

// BFS 함수
// function bfs(x, y) {
//   let count = 1;
//   const queue = []; // 큐를 초기화
//   queue.push([x, y]); // 시작 정점을 큐에 추가
//   visited[x][y] = true; // 시작 정점을 방문 표시

//   while (queue.length > 0) {
//     const [x, y] = queue.shift(); // 큐에서 정점 하나 꺼내기

//     for (let i = 0; i < 8; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       // 그래프 범위 내에 있고, 방문하지 않았다면
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < n &&
//         ny < m &&
//         map[nx][ny] == 1 &&
//         visited[nx][ny] == false
//       ) {
//         // 큐에 추가
//         queue.push([nx, ny]);

//         // 방문 표시
//         visited[nx][ny] = true;
//         count++;
//       }
//     }
//   }
//   return count;
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     if (map[i][j] == 1 && visited[i][j] == false) {
//       result.push(bfs(i, j));
//     }
//   }
// }

// console.log(result.length);

// DFS
function dfs(x, y) {
  visited[x][y] = true;

  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < n &&
      ny < m &&
      map[nx][ny] == 1 &&
      visited[nx][ny] == false
    ) {
      dfs(nx, ny);
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] == 1 && visited[i][j] == false) {
      dfs(i, j);
      result++;
    }
  }
}

console.log(result);
