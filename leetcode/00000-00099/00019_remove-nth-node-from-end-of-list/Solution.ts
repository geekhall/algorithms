/**
 * ID:    00019
 * Title: Remove Nth Node From End of List
 * Difficulty: Medium
 * Description: Given the head of a linked list, remove the n th node from the end of the list and return its head.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5]
 *
 * Example 2:
 *
 * Input: head = [1], n = 1 Output: []
 *
 * Example 3:
 *
 * Input: head = [1,2], n = 1 Output: [1]
 *
 * Constraints:
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 * Follow up: Could you do this in one pass?
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from '../../utils/ListNode';
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head
  let slow: ListNode | null = dummy
  let fast: ListNode | null = dummy
  while (n > 0 && fast) {
    fast = fast.next
    n--
  }
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next
  }
  slow!.next = slow!.next!.next
  return dummy.next
};

function test_00019() {
  let head = ListNode.create([1, 2, 3, 4, 5]), n = 2
  ListNode.print(removeNthFromEnd(head, n))
}

test_00019()
