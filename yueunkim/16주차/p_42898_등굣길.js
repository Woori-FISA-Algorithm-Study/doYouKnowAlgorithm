function solution(m, n, puddles) {
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  dp[1][1] = 1;

  // 물웅덩이 여러개일 수도 있음
  puddles.forEach(([x, y]) => {
    dp[y][x] = -1;
  });

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        if (dp[i][j - 1] !== -1) dp[i][j] += dp[i][j - 1]; // 왼쪽에서 오는
        if (dp[i - 1][j] !== -1) dp[i][j] += dp[i - 1][j]; // 위에서 내려오는
      }
      dp[i][j] = dp[i][j] % 1000000007;
    }
  }
  return dp[n][m];
}

// 효율성 테스트 1개 실패
