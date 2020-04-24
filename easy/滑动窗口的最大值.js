var maxSlidingWindow = function (nums, k) {
  let ans = [];
  let times = nums.length - k + 1;
  if (nums.length == 0) {
      return ans;
  }
  for(let i=0;i<times;i++){
      let startIndex = i;
      let endIndex = i + k ;
      let max = -Infinity;
      for(let j=startIndex;j<endIndex;j++){
          max = nums[j] > max ? nums[j] : max;
      }
      ans.push(max);
  }
  return ans;
};


console.log(maxSlidingWindow([],3));
