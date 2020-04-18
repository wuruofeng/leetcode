function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let that = null;
var mirrorTree = function (root) {
    if (!root) {
        return;
    }
    const temp = root.left;
    root.left = root.right;
    root.right  =temp;

    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};
