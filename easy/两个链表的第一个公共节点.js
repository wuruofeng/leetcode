function LinkList(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function (headA, headB) {
  let cur_1 = headA;
  let cur_2 = headB;
  while (cur_1.val != cur_2.val) {
    if (cur_1) {
      cur_1 = cur_1.next;
    } else {
      cur_1 = headB;
    }
    if (cur_2) {
      cur_2 = cur_2.next;
    } else {
      cur_2 = headA;
    }
  }
  return cur_2; //如果不相遇恰好为none
};
