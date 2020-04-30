var movingCount = function (m, n, k) {
  let visted = new Array(m);
  for (let i = 0; i < visted.length; i++) {
    visted[i] = new Array(n).fill(-1);
  }
  let ans = 0;
  let direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  function dfs(x, y) {
    visted[x][y] = 1;
    // console.log('visted!')
    let nx, ny;
    let x2arr = x.toString().split("");
    let y2arr = y.toString().split("");
    let sum = x2arr.concat(y2arr);

    let limit = 0;
    for (let i = 0; i < sum.length; i++) {
      limit += parseInt(sum[i]);
    }

    if (limit <= k) {
      visted[x][y] = limit;
      ans += 1;
    }
    for (let i = 0; i < 4; i++) {
      nx = x + direction[i][0];
      ny = y + direction[i][1];
      x2arr = nx.toString().split("");
      y2arr = ny.toString().split("");
      sum = x2arr.concat(y2arr);

      limit = 0;
      for (let i = 0; i < sum.length; i++) {
        limit += parseInt(sum[i]);
      }
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        visted[nx][ny] == -1 &&
        limit <= k
      ) {
        dfs(nx, ny);
      }
    }
    return;
  }
  dfs(0, 0);
  return ans;
};

console.log(movingCount(16, 8, 4));
