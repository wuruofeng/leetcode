var minNumber = function (nums) {
  let arr = nums.toString().split(",");
  function cmp(a, b) {
    a = a.toString();
    b = b.toString();
    let x = parseInt(a + b);
    let y = parseInt(b + a);
    return x - y;
  }

  arr = arr.sort(cmp);
  return arr.join('');
};
console.log(minNumber([3, 30, 34, 5, 9]));
