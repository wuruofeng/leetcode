/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let bool = true;
    fun(root);
    return bool;

    function fun(root) {
        if(!root) return 0;
        let left = (root.left) ? fun(root.left) : 0;
        let right = (root.right) ? fun(root.right) : 0;
        if(Math.abs(left - right) > 1) bool = false;
        return Math.max(left, right) + 1;
    }
    
};
