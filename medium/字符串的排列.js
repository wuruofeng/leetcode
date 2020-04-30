var permutation = function (s) {
  let set = new Set();
  function swap(s, i, j) {
    if (i == j) return s;
    return (
      s.substring(0, i) +
      s[j] +
      s.substring(i + 1, j) +
      s[i] +
      s.substring(j + 1)
    );
  }

  function _perm(s, p, q) {
    if (p == q) {
      set.add(s);
      return s;
    } else {
      for (let i = p; i <= q; i++) {
        s = swap(s, p, i);
        _perm(s, p + 1, q);
        s = swap(s, p, i);
      }
    }
  }

  _perm(s,0,s.length-1);
  return Array.from(set);
};

console.log(permutation('12258'));

