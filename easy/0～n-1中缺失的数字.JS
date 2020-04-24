var missingNumber = function (nums) {
    let len = nums.length;
    let flag = 0;
    for(let i=0;i<len;i++){
        if (nums[i] == i) {
            flag++;
        }else{
            return flag;
        } 
    }
    return flag;
};


console.log(missingNumber([1]));
