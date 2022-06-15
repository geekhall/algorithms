/**
 * ID:    00024
 * Title: Swap Nodes in Pairs
 * Difficulty: Medium
 * Description: Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4] Output: [2,1,4,3]
 *
 * Example 2:
 *
 * Input: head = [] Output: []
 *
 * Example 3:
 *
 * Input: head = [1] Output: [1]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 */
import { ListNode } from "../../utils/ListNode"
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null)
    return null
  if (head.next === null)
    return head
  let newHead = head.next
  let prev: ListNode | null = head
  let curr = head.next
  while (curr !== null && curr.next !== null) {
    let next = curr.next
    curr.next = prev
    prev!.next = next.next === null ? next : next.next
    prev = next
    curr = next!.next!
  }
  if (curr !== null) {
    curr.next = prev
  }
  if (prev !== null) {
    prev.next = null
  }

  return newHead
};

function test_00024() {
  let head = ListNode.create([1, 2])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3, 4])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3, 4, 5])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3, 4, 5, 6])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3, 4, 5, 6, 7])
  ListNode.print(swapPairs(head))
  head = ListNode.create([1, 2, 3, 4, 5, 6, 7, 8])
  ListNode.print(swapPairs(head))
}

test_00024()
