var myPow = function (x, n) {
  if (n == 0) return 1;
  if (n == 1) return x;
  if (x == 1) return 1;
  const flag = n < 0;
  let absn = Math.abs(n);
  let res = 1;
  while (absn) {
    if (absn & 1) {
      res *= x;
    }
    x *= x;
    absn = Math.floor(absn / 2);
  }
  return flag ? 1 / res : res;
};

console.log(myPow(2, -2));
