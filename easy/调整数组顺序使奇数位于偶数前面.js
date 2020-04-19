var exchange = function (nums) {
  let len = nums.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] % 2 == 0) {
      ans.push(nums[i]);
    } else {
      ans.unshift(nums[i]);
    }
  }
  return ans;
};

console.log(exchange([1]));
