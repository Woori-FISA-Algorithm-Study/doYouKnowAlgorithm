function solution(board) {
  let answer = 0;

  const n = board.length;
  const m = board[0].length;

  // 첫 번째 행과 열은 두고 나머지 칸에 대해 왼쪽 위, 왼쪽, 위 중 최솟값에 + 1을 저장
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
      }
    }
  }

  // 가장 큰 값을 찾아 그 제곱을 반환 (넓이)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer = Math.max(answer, board[i][j]);
    }
  }

  return answer * answer;
}
