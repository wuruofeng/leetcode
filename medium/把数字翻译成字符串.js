var translateNum = function (num) {
    //dp[i] = dp[i-1] + dp[i-2] //can
    //dp[i] = dp[i-1] //uncan
    num = num.toString();
    let dp = new Array(num.length);
    dp[0] = 1;
    //hack dp[2]
    let hack = parseInt(num[0] + num[1]);
    if (hack > 25 || hack < 10) {
        dp[1] = 1;
    }else{
        dp[1] = 2;
    }
    for(let i=2;i<dp.length;i++){
        let temp = parseInt(num[i - 1] + num[i]);
        if (temp > 25 || temp < 10) {
          dp[i] = dp[i - 1];
        } else {
          dp[i] = dp[i - 1] + dp[i - 2];
        }
    }

    return dp[num.length - 1];
};

console.log(translateNum(506));
