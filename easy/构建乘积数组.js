var constructArr = function (arr) {
  let res = 1;
  let len = arr.length;
  let left = new Array(len).fill(1);
  let right = new Array(len).fill(1);
  let ans = new Array(len).fill(1);
  let temp = 1;
  for (let i = 1; i < len; i++) {
    temp *= arr[i - 1];
    left[i] = temp;
  }
  temp = 1;
  for (let i = len-2; i >= 0; i--) {
    temp *= arr[i + 1];
    right[i] = temp;
  }

  for(let i=0;i<len;i++){
      ans[i] = left[i] * right[i];
  }
  return ans;
};


console.log(constructArr([1,2,3,4,5]));