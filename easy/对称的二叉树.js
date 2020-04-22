var isSymmetric = function (root) {
    if (!root) {
        return null;
    }
    let copy = creat(root);
    let copy_exchange = exchange(copy);
    dfs(root, copy_exchange);




};



function creat(root){
    if (!root) {
        return null;
    }
    let node = new TreeNode(root.val);
    node.left = root.left;
    node.right = root.right;
    creat(root.left);
    creat(root.right);
    return root;
}

function exchange(root){
    if (!root) {
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    exchange(root.left);
    exchange(root.right);
    return root;
}

function dfs(root1,root2){
    if (!root1) {
        return null;
    }
    if (!root2) {
      return null;
    }
    if (root1.val != root2.val) {
        return false;
    }

    dfs(root1.left,root2.left);
    dfs(root1.right,root2.right);
    return true;
}