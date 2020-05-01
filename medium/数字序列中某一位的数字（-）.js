var findNthDigit = function (n) {
  let [start,
    index,
    num] = [1, 1, 9];

  while (n > num) {
    n -= num;
    start *= 10;
    index += 1;
    num = start * index * 9;
  }
  let times = Math.floor((n - 1) / index);

  let ans = times + start;
  
  return ans.toString().split("")[(n - 1) % index];
};

console.log(findNthDigit(11));
