function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getKthFromEnd = function (head, k) {
    let cur_1 = head;
    let cur_2 = head;
    while (k--) {
        cur_1 = cur_1.next;
    }
        //hack
    if (cur_1 == null) {
        return cur_2;
    }
    while (cur_1.next!=null) {
        cur_1 = cur_1.next;
        cur_2 = cur_2.next;
    }

    
    return cur_2.next;
};