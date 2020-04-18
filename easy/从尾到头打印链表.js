function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reversePrint = function (head) {
    let ans = [];
    let cur = head;
    // hack
    if (cur == null) {
        return [];
    }
    while (cur!=null) {
        ans.unshift(cur.val);
        cur = cur.next;
    }
    return ans;
};
