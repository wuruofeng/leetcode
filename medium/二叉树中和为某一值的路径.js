let ans = [];
let temp = [];
var pathSum = function (root, sum) {
  if (!root) {
    return [];
  }

  dfs(root, [], sum);
  temp = ans;
  ans = [];
  return temp;
};

function dfs(root, path, sum) {
  if (!root) {
    return;
  }
  sum -= root.val;
  path.push(root.val);
  if (sum == 0 && !root.left && !root.right) {
    ans.push([...path]);
  }

  dfs(root.left, path, sum);
  dfs(root.right, path, sum);
  path.pop();
}
