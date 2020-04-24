var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let i = 0;

  while (i <= row && col >= 0) {
    if (matrix[i][col] == target) {
      return true;
    } else if (matrix[i][col] > target) {
      col--;
    } else {
      i++;
    }
  }
  return false;
};

console.log(
  findNumberIn2DArray(
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
    5
  )
);
