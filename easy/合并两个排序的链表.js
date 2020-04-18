var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let head = new ListNode(-1);
  let cur = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  while (l1) {
    cur.next = l1;
    l1 = l1.next;
    cur = cur.next;
  }
  while (l2) {
    cur.next = l2;
    l2 = l2.next;
    cur = cur.next;
  }
  return head.next;
};
