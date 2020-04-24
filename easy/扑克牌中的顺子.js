var isStraight = function (nums) {
    let len  = nums.length;
    let min = Infinity;
    let cnt = 0;
    for(let i=0;i<len;i++){
        if (nums[i]==0) {
            cnt++;
            continue;
        }
        min = nums[i] < min ? nums[i] : min;
    }
    
    for(let i = 0;i<5;i++){
        
    }


};



console.log(isStraight([0,0,1,2,5]))