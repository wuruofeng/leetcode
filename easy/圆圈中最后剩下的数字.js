var lastRemaining = function (n, m) {
    let ans = 0;
    for(let i=2;i<=n;i++){
        ans = (ans+m)%i;
    }
    return ans;
};
console.log(lastRemaining(6, 2));


// 约瑟夫环:
// f(n,m) = (f(n-1,m)+m)%n