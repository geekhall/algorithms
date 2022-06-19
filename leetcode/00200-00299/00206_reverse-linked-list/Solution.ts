/**
 * ID:    00206
 * Title: Reverse Linked List
 * Difficulty: Easy
 * Description: Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5] Output: [5,4,3,2,1]
 *
 * Example 2:
 *
 * Input: head = [1,2] Output: [2,1]
 *
 * Example 3:
 *
 * Input: head = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 * Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */
import { ListNode } from '../../utils/ListNode';
function reverseList(head: ListNode | null): ListNode | null {
  let res: ListNode | null = null
  while (head !== null) {
    let next = head.next
    head.next = res
    res = head
    head = next
  }
  return res
}

function test_00206() {
  let head = ListNode.create([1, 2, 3, 4, 5])
  ListNode.print(reverseList(head))
}

test_00206()
