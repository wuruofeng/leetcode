let arr = [];
function dfs(root) {
  if (!root) {
    return null;
  }
  dfs(root.left);
  arr.push(root.val);
  dfs(root.right);
}

var kthLargest = function (root, k) {
    dfs(root);
    arr.filter(d=>d);
    arr = arr.reverse()
    return arr[k-1];
};
