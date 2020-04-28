var cuttingRope = function (n) {
    if (n<=3) {
        return n-1;
    }
  let times = n % 3;
  let tmp = Math.floor(n / 3);
  switch (times) {
    case 0:
      return Math.pow(3, tmp);
      break;
    case 1:
      return Math.pow(3, tmp-1) * 4;
      break;
    case 2:
      return Math.pow(3, tmp ) * 2;
      break;
  }
};
console.log(cuttingRope(5));
