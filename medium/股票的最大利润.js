let dp = new Array(1e5 + 5).fill(0);

var maxProfit = function (prices) {
  //dp[i] = max(dp[i-1],prices[i]-min(dp[j]))
  if (prices.length==0) {
      return 0
  }
  for (let i = 1; i < prices.length; i++) {
      let min = Infinity;
    for(let j=0;j<i;j++){
        min = prices[j] < min ? prices[j] : min;
    }
    dp[i] = Math.max(dp[i-1],prices[i]-min) 
  }


  return dp[prices.length-1];
};


console.log(maxProfit([7, 6, 4, 3, 1]));
