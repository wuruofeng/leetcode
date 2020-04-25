
var treeToDoublyList = function(root) {
    if(!root){
        return null;
    }
    if(root.length==1){
        return root;
    }
    var arr = [];
    //中序遍历
    function bl(root){
        if(!root){
            return;
        }
        bl(root.left);
    //将节点存放到数组中
        arr.push(root);
        bl(root.right);
    }
    bl(root);
    for(var i=0;i<arr.length-1;i++){
        arr[i].right=arr[i+1];
        arr[i+1].left=arr[i];
    }
    length=arr.length;
    //将最小的节点和最大的节点之间建立联系
    arr[length-1].right=arr[0];
    arr[0].left = arr[length-1]
    return arr[0];
};
