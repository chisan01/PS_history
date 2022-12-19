function swapPairs(head: ListNode | null): ListNode | null {
  return swapPairRecursively(head);
}

function swapPairRecursively(firstNode: ListNode | null): ListNode | null {
  if(firstNode === null) return firstNode;
  const secondNode = firstNode.next;
  if(secondNode === null) return firstNode;

  const firstNodeOfNextPair = secondNode.next;
  secondNode.next = firstNode;
  firstNode.next = swapPairRecursively(firstNodeOfNextPair);
  return secondNode;
}