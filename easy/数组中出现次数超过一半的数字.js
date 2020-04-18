var majorityElement = function (nums) {
  let len = nums.length;
  let map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.get(nums[i])==null) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  let ans = 0;
  for (let iterator of map.entries()) {
    if (iterator[1] > len / 2) {
       ans = iterator[0]
    }
  }
  return ans;
};

console.log(majorityElement([3,2,3]));
