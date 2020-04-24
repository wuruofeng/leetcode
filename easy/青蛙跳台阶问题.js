let dp = new Array(101);

var numWays = function (n) {
    if (n==1) {
        return 1
    }
    if(n==2){
        return 2
    }
    if (dp[n]>0) {
        return (dp[n])%(1e9+7) ;
    }else{
        return (dp[n] = numWays(n - 1) + numWays(n - 2)) % (1e9 + 7);
    }
    
};


console.log(numWays(7))