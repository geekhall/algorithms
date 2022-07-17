/**
 * ID:    00143
 * Title: Reorder List
 * Difficulty: Medium
 * Description: You are given the head of a singly linked-list. The list can be represented as:
 *
 * L 0 → L 1 → … → L n - 1 → L n
 *
 * Reorder the list to be on the following form:
 *
 * L 0 → L n → L 1 → L n - 1 → L 2 → L n - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4] Output: [1,4,2,3]
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5] Output: [1,5,2,4,3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5 * 10 4 ].
 * 1 <= Node.val <= 1000
 */
import { ListNode } from "../../utils/ListNode"
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return
  }
  const stack: ListNode[] = [];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  while (stack.length >= 3) {
    stack[0].next = stack[stack.length - 1];
    stack[stack.length - 1].next = stack[1];
    stack[stack.length - 2].next = null;

    stack.shift();
    stack.pop();
  }
};

function test_00143() {
  let l1 = ListNode.create([1, 2, 3, 4])
  reorderList(l1)
  ListNode.print(l1)
  let l2 = ListNode.create([1, 2, 3, 4, 5])
  reorderList(l2)
  ListNode.print(l2)

}

test_00143()
