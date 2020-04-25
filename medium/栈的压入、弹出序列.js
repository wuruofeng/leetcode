var validateStackSequences = function (pushed, popped) {
  let arr = [];
  let len = pushed.length;
  for (let i = 0; i < len; i++) {
    arr.push(pushed[i]);
    while (arr.length && arr[arr.length - 1] == popped[0]) {
      popped.shift();
      arr.pop();
    }
  }
  return !arr.length;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
