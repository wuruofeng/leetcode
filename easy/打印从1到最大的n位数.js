var printNumbers = function (n) {
    //n->pow(10,n)-1
    let ans = [];
    for(let i=1;i<=Math.pow(10,n)-1;i++){
        ans.push(i);
    }
    return ans;
};

console.log(printNumbers(2));

