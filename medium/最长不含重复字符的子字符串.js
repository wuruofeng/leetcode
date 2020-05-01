var lengthOfLongestSubstring = function (s) {
  let [i, j] = [0, 0];
  let len = s.length;
  let map = {};
  let ans = 0;
  while (i < len && j < len) {
    if (!map[s[j]]) {
      ans = Math.max(ans, j - i + 1);
      map[s[j]] = true;
      j++;
    } else {
      map[s[i]] = false;
      i++;
    }
  }
  return ans;
};
