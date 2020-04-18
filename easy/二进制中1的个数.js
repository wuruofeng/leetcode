var hammingWeight = function (n) {
    n = n.toString(2);
    let arr = n.split('');
    let ans = new Array(2).fill(0);
    for(let i=0;i<arr.length;i++){
        ans[arr[i]]++;
    }
    return ans[1];
};


console.log(hammingWeight(13));
