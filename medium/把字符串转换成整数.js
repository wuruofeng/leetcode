var strToInt = function (str) {
  str = str.trim();
  if (!str) {
    return 0;
  }
  let bool = !!str[0].match(/[0-9+-]/);
  if (!bool) return 0;
  let ans = [];
  let i = 0;
  if (str[0] == "+" || str[0] == "-") i++;
  let nega = str[0] == "-";
  while (i < str.length) {
    if (!!str[i].match(/[0-9]/)) {
      ans.push(str[i]);
      i++;
    } else {
      break;
    }
  }

  if (!parseInt(ans.join(""))) {
    return 0;
  }

  return nega
    ? Math.max(-1 * parseInt(ans.join("")), -1 * Math.pow(2, 31))
    : Math.min(parseInt(ans.join("")), Math.pow(2, 31) - 1);
};

console.log(strToInt("+"));
