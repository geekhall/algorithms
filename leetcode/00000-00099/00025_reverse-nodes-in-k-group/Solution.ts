/**
 * ID:    00025
 * Title: Reverse Nodes in k-Group
 * Difficulty: Hard
 * Description: Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], k = 2 Output: [2,1,4,3,5]
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5], k = 3 Output: [3,2,1,4,5]
 *
 * Constraints:
 *
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 * Follow-up: Can you solve the problem in O(1) extra memory space?
 */

import { ListNode } from "../../utils/ListNode"
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr = head;
  let count = 0;
  while (curr != null && count != k) { // find the k+1 node
    curr = curr.next;
    count++;
  }
  if (count == k) { // if k+1 node is found
    curr = reverseKGroup(curr, k); // reverse list with k+1 node as head
    // head - head-pointer to direct part,
    // curr - head-pointer to reversed part;
    while (count-- > 0) { // reverse current k-group:
      let tmp = head!.next; // tmp - next head in direct part
      head!.next = curr; // preappending "direct" head to the reversed list
      curr = head; // move head of reversed part to a new node
      head = tmp; // move "direct" head to the next node in direct part
    }
    head = curr;
  }
  return head;
};

function test_00025() {
  let l1 = ListNode.create([1, 2, 3, 4, 5]);
  let l2 = reverseKGroup(l1, 2);
  ListNode.print(l2);
  l1 = ListNode.create([1, 2, 3, 4, 5]);
  l2 = reverseKGroup(l1, 3);
  ListNode.print(l2);
}

test_00025()
