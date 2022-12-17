function swapPairs(head: ListNode | null): ListNode | null {
  let isFirst = true;
  let prevLastNode: ListNode;
  let firstNode: ListNode | null = head;
  let secondNode: ListNode | null = null;

  while(firstNode !== null) {
      secondNode = firstNode.next;
      if(secondNode === null) break;

      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      if(isFirst) {
          head = secondNode;
          isFirst = false;
      } else {
          prevLastNode.next = secondNode;
      }

      prevLastNode = firstNode;
      firstNode = firstNode.next;
      secondNode = null;
  }
  return head;
}