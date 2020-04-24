let dp = new Array(101);


var fib = function (n) {
    if (n==0) {
        return 0;
    }
    if (n==1) return 1;
    if (n==2) return 1;
    if (dp[n]>0) {
        return (dp[n])%(1e9+7)
    }else{
        dp[n] = fib(n - 1) + fib(n - 2);
        return (dp[n])%(1e9+7)
    }
};



console.log(fib(5))