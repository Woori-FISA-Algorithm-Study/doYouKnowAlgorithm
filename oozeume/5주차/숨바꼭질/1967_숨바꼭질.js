const fs = require('fs')
const N = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

const [n, k] = N.split(' ').map(Number);

let visited = Array.from({ length: 100000 + 1 }, () => false);
let dist = Array.from({ length: 100000 + 1 }, () => 0);

// 가장 빠른 시간을 구해야하는데
// 방문하는 정점을 몇번만에 방문하는지 확인하는 방법이 필요하다

const bfs = (vertex) => {
  let q = [];
  q.push(vertex)
  visited[vertex] = true;
  dist[vertex] = 0; // 시작점은 포함하지 않기 때문에 0으로 세팅

  while (q.length > 0) {
    const cv = q.shift();

    for (let i = 0; i < 3; i++) {
      let nx = 0;
      // next로 가능한 정점
      if (i === 0) {
        nx = Number(cv) - 1
      } else if (i === 1) {
        nx = Number(cv) + 1;
      } else {
        nx = Number(cv) * 2
      }

      if (visited[nx] === false) {

        q.push([nx])
        visited[nx] = true

        // 거리 구하기 next의 거리를 지정해주려면 current의 거리 +1을 해주어야함
        // 모든 간선의 가중치는 1이기 때문
        dist[nx] = dist[cv] + 1
      }
      if (nx === k) {
        break;
      }
    }
  }
}

bfs(n)

console.log(dist[k]);