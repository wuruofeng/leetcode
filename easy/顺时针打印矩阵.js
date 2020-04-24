var spiralOrder = function (matrix) {
  if (matrix.length == 0) {
    return [];
  }
  let left = 0;
  let right = matrix[0].length -1;
  let top = 0;
  let buttom = matrix.length -1;

  const res = [];

  while (left <= right && top <= buttom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;
    if (top > buttom) {
      break;
    }
    for (let i = top; i <= buttom; i++) {
      res.push(matrix[i][right]);
    }
    right -= 1;

    if (left > right) {
      break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[buttom][i]);
    }

    buttom -= 1;
    if (top > buttom) {
      break;
    }
    for (let i = buttom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
    if (left > right) {
      break;
    }
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
