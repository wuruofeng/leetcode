var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) == undefined) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  for (let i of map) {
    if (i[1]==1) {
        return i[0]
    }
  }
};

console.log(singleNumber([9, 1, 7, 9, 7, 9, 7]));
