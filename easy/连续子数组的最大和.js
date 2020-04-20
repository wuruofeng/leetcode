var maxSubArray = function (nums) {
    //dp[i+1] = dp[i]>0?dp[i+1]+dp[i]:dp[i+1]
    //
    let len = nums.length;
    let dp = new Array();
    for(let i=0;i<len;i++){
        dp[i] = nums[i];
    }
    for(let i=0;i<len;i++){
        dp[i + 1] = dp[i] > 0 ? dp[i + 1] + dp[i] : dp[i + 1];
    }
    let max = -Infinity;
    for(let i=0;i<len;i++){
        max = dp[i]>max?dp[i]:max;
    }
    return max;

};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));