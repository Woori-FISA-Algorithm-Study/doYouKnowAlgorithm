const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [r, c] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i <= r; i++) {
  let row = input[i].split("");
  map.push(row);
}
let result = [0, 0];

const dx = [-1, 1, 0, 0]; // 상, 하
const dy = [0, 0, -1, 1]; // 좌, 우

// 방문한 정점을 저장하기 위한 배열
let visited = Array.from(Array(r), () => Array(c).fill(false));

// BFS 함수
// function bfs(x, y) {
//   let sheep = 0;
//   let wolf = 0;
//   if (map[x][y] == "k") sheep++;
//   else if (map[x][y] == "v") wolf++;

//   const queue = []; // 큐를 초기화
//   queue.push([x, y]); // 시작 정점을 큐에 추가
//   visited[x][y] = true; // 시작 정점을 방문 표시

//   while (queue.length > 0) {
//     const [x, y] = queue.shift(); // 큐에서 정점 하나 꺼내기

//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];

//       // 그래프 범위 내에 있고, 방문하지 않았다면
//       if (
//         nx >= 0 &&
//         ny >= 0 &&
//         nx < r &&
//         ny < c &&
//         map[nx][ny] !== "#" &&
//         visited[nx][ny] == false
//       ) {
//         if (map[nx][ny] == "k") {
//           sheep++;
//         } else if (map[nx][ny] == "v") {
//           wolf++;
//         }
//         queue.push([nx, ny]);

//         // 방문 표시
//         visited[nx][ny] = true;
//       }
//     }
//   }
//   sheep > wolf ? (result[0] += sheep) : (result[1] += wolf);
// }

// DFS함수
// for (let i = 0; i < r; i++) {
//   for (let j = 0; j < c; j++) {
//     if (map[i][j] !== "#" && !visited[i][j]) {
//       bfs(i, j);
//     }
//   }
// }

// console.log(result[0], result[1]);

// DFS함수

function dfs(x, y) {
  let sheep = 0;
  let wolf = 0;
  if (map[x][y] == "k") sheep++;
  else if (map[x][y] == "v") wolf++;

  visited[x][y] = true; // 시작 정점을 방문 표시

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < r &&
      ny < c &&
      !visited[nx][ny] &&
      map[nx][ny] !== "#"
    ) {
      const [nextSheep, nextWolf] = dfs(nx, ny);
      sheep += nextSheep;
      wolf += nextWolf;
    }
  }

  return [sheep, wolf];
}

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (map[i][j] !== "#" && !visited[i][j]) {
      const [sheep, wolf] = dfs(i, j);
      sheep > wolf ? (result[0] += sheep) : (result[1] += wolf);
    }
  }
}

console.log(result.join(" "));
