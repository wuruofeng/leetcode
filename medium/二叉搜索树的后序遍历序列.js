var verifyPostorder = function (postorder) {
  let len = postorder.length;
  if (len < 2) {
    return true;
  }
  let root = postorder[len - 1];
  let cut = 0;
  for (; cut < len - 1; cut++) {
    if (postorder[cut] > root) {
      break;
    }
  }

  let flag = postorder.slice(cut, len - 1).every((x) => x > root);
  if (flag) {
    return (
      verifyPostorder(postorder.slice(0, cut)) &&
      verifyPostorder(postorder.slice(cut, len - 1))
    );
  } else {
    return false;
  }
};

console.log(verifyPostorder([4, 6, 7, 5]));
