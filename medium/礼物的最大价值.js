let dp = new Array(205);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(205).fill(0);
}

//dp[i][j] = max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
var maxValue = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      dp[0][j] = 0;
      dp[i + 1][j + 1] = grid[i][j];
    }
    dp[i][0] = 0;
  }
  for (let i = 1; i <= grid.length; i++) {
    for (let j = 1; j <= grid[0].length; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[grid.length][grid[0].length];
};

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
