var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [];
  let ans = [];
  queue.push(root);
  while (queue.length > 0) {
    let num = queue.length;
    let temp_ans = [];
    while (num--) {
      let temp = queue.shift();
      temp_ans.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    ans.push([...temp_ans]);
  }
  return ans;
};
