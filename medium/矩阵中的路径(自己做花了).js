var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  //   let ans = [];
  let direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let visited = new Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n).fill(-1);
  }

  let starti, startj, flag;
  let startset = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        startset.push([i, j]);
        flag = true;
      }
    }
  }
  if (!flag) {
    return false;
  }

  let index = startset.length;
  let ans = [];
  for (let i = 0; i < index; i++) {
    ans[i] = new Array();
  }

  for (let i = 0; i < index; i++) {
    dfs(startset[i][0], startset[i][1], 0, i);
  }

  function dfs(x, y, k, index) {
    visited[x][y] = 1;
    ans[index].push(board[x][y]);
    let nx, ny;
    for (let i = 0; i < 4; i++) {
      nx = x + direction[i][0];
      ny = y + direction[i][1];

      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        board[nx][ny] == word[k + 1] &&
        visited[nx][ny] == -1
      ) {
        dfs(nx, ny, k + 1, index);
      }
    }
    return;
  }
  //res
  console.log(ans);
  for (let i = 0; i < ans.length; i++) {
    if (ans[i].length == word.length) {
      return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
