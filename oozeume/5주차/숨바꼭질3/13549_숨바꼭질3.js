const fs = require('fs')
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()

const [start, end] = input.split(' ').map(Number);

const bfs = () => {
  const q = [[start, 0]];
  const visited = new Array(100001).fill(false);
  visited[start] = true;

  while (q.length) {
    const [position, time] = q.shift();

    if (position === end) {
      console.log(time);
      return;
    }

    for (let next of [position * 2, position - 1, position + 1]) {
      if (next < 0 || next > 100000 || visited[next]) continue;

      if (next === position * 2) {
        q.unshift([next, time]);
      } else {
        q.push([next, time + 1]);
      }
      visited[next] = true;
    }
  }
};

bfs();