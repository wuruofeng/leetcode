var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let ans = [];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    ans.push(node.val);
  }
  return ans;
};
