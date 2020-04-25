var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let depth = 1; //偶数右到左   奇数左到右
  let ans = [];
  while (queue.length) {
    let len = queue.length;
    let _dep = [];
    while (len--) {
      let node = queue.shift();
      _dep.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    _dep = depth % 2 == 0 ? _dep.reverse() : _dep;
    depth++;
    ans.push(_dep);
  }
  return ans;
};
