//dp[12][70]

var twoSum = function (n) {
  let len_for_ans = 5 * n + 1;
  let dp = new Array(12);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(70).fill(0);
  }
  let ans = [];
  for (let i = 1; i <= 6; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= 6 * n; j++) {
      for (let k = 1; k <= 6; k++) {
        //hack
        if (j - k < 0) continue;
        dp[i][j] += dp[i - 1][j - k];
      }
    }
  }

  let all = Math.pow(6, n);
  for (let p = n; p <= 6 * n; p++) {
    ans.push((dp[n - 1][p] / all));
  }

  return ans;
};

console.log(twoSum(7));
