/**
 * ID:    00148
 * Title: Sort List
 * Difficulty: Medium
 * Description: Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Example 1:
 *
 * Input: head = [4,2,1,3] Output: [1,2,3,4]
 *
 * Example 2:
 *
 * Input: head = [-1,5,3,4,0] Output: [-1,0,3,4,5]
 *
 * Example 3:
 *
 * Input: head = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 5 * 10 4 ].
 * -10 5 <= Node.val <= 10 5
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 */
import { ListNode } from '../../utils/ListNode'
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  if (!head.next.next) {
    if (head.val > head.next.val) {
      let temp = head.next.val;
      head.next.val = head.val;
      head.val = temp;
    }
    return head;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  let mid = slow!.next;
  slow!.next = null;
  let left = sortList(head);
  let right = sortList(mid);


  const merge = (left: ListNode | null, right: ListNode | null): ListNode | null => {
    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }
    if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    } else {
      right.next = merge(left, right.next);
      return right;
    }
  }
  return merge(left, right);
};

function test_00148() {
  let head = ListNode.create([4, 2, 1, 3])
  let result = sortList(head);
  ListNode.print(result);
}

test_00148()
