var deleteNode = function (head, val) {
  let node = new ListNode(-1);
  node.next = head;
  let pre= node;
  while (pre.next) {
      if (pre.next.val ==val) {
          pre.next = pre.next.next;
      }else{
          pre = pre.next; 
      }
  }
  return node.next;
};
