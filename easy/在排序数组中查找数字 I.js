var search = function (nums, target) {
  let map = new Map();
  for(let i=0;i<nums.length;i++){
    if (map.get(nums[i])==null) {
      map.set(nums[i],1);
    }else{
      map.set(nums[i],map.get(nums[i])+1);
    }
  }
  return map.get(target)?map.get(target):0;
};



console.log(search([5, 7, 7, 8, 8, 10],8));