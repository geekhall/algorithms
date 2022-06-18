/**
 * ID:    00203
 * Title: Remove Linked List Elements
 * Difficulty: Easy
 * Description: Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * Example 1:
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
 *
 * Example 2:
 *
 * Input: head = [], val = 1 Output: []
 *
 * Example 3:
 *
 * Input: head = [7,7,7,7], val = 7 Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 10 4 ].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 */
import { ListNode } from "../../utils/ListNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let cur: ListNode | null = head
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next
    } else {
      prev = cur
    }
    cur = cur.next
  }
  return dummy.next
};

function test_00203() {
  let head = ListNode.create([1, 2, 6, 3, 4, 5, 6]), val = 6
  ListNode.print(removeElements(head, val))
}

test_00203()
