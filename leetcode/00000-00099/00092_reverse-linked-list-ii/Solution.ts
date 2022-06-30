/**
 * ID:    00092
 * Title: Reverse Linked List II
 * Difficulty: Medium
 * Description: Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], left = 2, right = 4 Output: [1,4,3,2,5]
 *
 * Example 2:
 *
 * Input: head = [5], left = 1, right = 1 Output: [5]
 *
 * Constraints:
 *
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 * Follow up: Could you do it in one pass?
 */
import { ListNode } from '../../utils/ListNode'

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || left >= right)
    return head
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let cur = head
  let i = 0
  while (i < left - 1) {
    prev = cur
    cur = cur.next
    i++
  }
  let tail = cur
  let next = cur!.next
  while (i < right) {
    let tmp = next!.next
    next!.next = cur
    cur = next
    next = tmp
    i++
  }
  tail!.next = next
  prev!.next = cur
  return dummy.next
};

function test_00092() {
  let head = ListNode.create([1, 2, 3, 4, 5]), left = 2, right = 4
  ListNode.print(reverseBetween(head, left, right))
  head = ListNode.create([5])
  ListNode.print(reverseBetween(head, left, right))
}

test_00092()
