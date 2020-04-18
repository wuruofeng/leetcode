function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


let depth = 0;

var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};


