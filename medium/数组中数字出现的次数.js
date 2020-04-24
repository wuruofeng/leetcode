var singleNumbers = function (nums) {
  let res = 0;
  for (let num of nums) {
    res = res ^ num;
  }
  return res;
};

console.log(singleNumbers([4,1,4,6]));