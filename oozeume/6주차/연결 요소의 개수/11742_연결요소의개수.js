const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
let count = 0;

for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (start) => {
  if (!visited.includes(false)) {
    return;
  }

  for (let i of graph[start]) {
    if (visited[i] === false) {
      visited[i] = true;
      dfs(i);
    }
  }
};

for (let i = 1; i < N + 1; i++) {
  if (visited[i] === false) {
    count++;
    dfs(i);
  }
}

console.log(count);