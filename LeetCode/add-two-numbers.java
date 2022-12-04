class Solution {

  private void concat(ListNode prev, ListNode other, int carry) {
      if(other == null) return;
      while (other != null) {
          int sum = other.val + carry;
          ListNode cur = new ListNode(sum % 10, null);
          carry = sum / 10;
          other = other.next;
          prev.next = cur;
          prev = cur;
      }
      if(carry != 0) {
          prev.next = new ListNode(carry, null);
      }
  }

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      ListNode root = null;
      ListNode prev = null;
      int carry = 0;
      while (l1 != null && l2 != null) {
          int sum = l1.val + l2.val + carry;
          ListNode cur = new ListNode(sum % 10, null);
          carry = sum / 10;
          l1 = l1.next;
          l2 = l2.next;
          
          if(prev != null) prev.next = cur;
          else root = cur;
          prev = cur;
      }
      if(l1 == null && l2 == null && carry != 0) {
          prev.next = new ListNode(carry, null);
          return root;
      }
      concat(prev, l1, carry);
      concat(prev, l2, carry);
      return root;
  }
}