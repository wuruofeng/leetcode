var findRepeatNumber = function (nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if (map.get(nums[i])==null) {
            map.set(nums[i],1);
        }else{
            map.set(nums[i],map.get(nums[i])+1);
        }
        
    }
    for (const iterator of map) {
        if (iterator[1]>1) {
            return iterator[0];
        }
    }
};
