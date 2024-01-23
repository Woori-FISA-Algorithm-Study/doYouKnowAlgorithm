const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

//정점의 개수 N, 간선의 개수 M
const n = +input[0];
const m = +input[1];

// 그래프 만들기
let graph = [...Array(n + 1)].map(() => []);
for (let i = 2; i <= m + 1; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const result = []; //결과 담을 배열
const visited = []; // 방문한 정점을 저장하기 위한 배열

// DFS 함수
function dfs(node) {
  // 현재 정점을 방문한 것으로 표시
  visited[node] = true;
  result.push(node);

  // 현재 정점과 인접한 모든 정점에 대해서
  for (const adjacentNode of graph[node]) {
    // 방문하지 않은 정점이라면 DFS를 재귀적으로 호출
    if (!visited[adjacentNode]) {
      dfs(adjacentNode);
    }
  }

  return result.length - 1;
}

console.log(dfs(1));
