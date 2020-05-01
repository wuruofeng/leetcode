var cuttingRope = function (k) {
  if (k <= 3) {
    return k - 1;
  }
  let n = BigInt(k);
  let rest = n % 3n; //0 1 2
  let times;
  const maxn = 1000000007n;
  switch (rest) {
    case 0n:
      times = n / 3n;
      return (3n**times) % maxn;
    case 1n:
      times = n / 3n;
      return (4n * (3n**(times - 1n))) % maxn;
    case 2n:
      times = n / 3n;
      return (2n * (3n** times)) % maxn;
    default:
      break;
  }
};




