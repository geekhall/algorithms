/**
 * ID:    01290
 * Title: Convert Binary Number in a Linked List to Integer
 * Difficulty: Easy
 * Description: Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
 *
 * Return the decimal value of the number in the linked list.
 *
 * Example 1:
 *
 * Input: head = [1,0,1] Output: 5 Explanation: (101) in base 2 = (5) in base 10
 *
 * Example 2:
 *
 * Input: head = [0] Output: 0
 *
 * Constraints:
 *
 * The Linked List is not empty.
 * Number of nodes will not exceed 30.
 * Each node's value is either 0 or 1.
 */
import { ListNode } from "../../utils/ListNode"
function getDecimalValue(head: ListNode | null): number {
  if (!head)
    return 0

  let res = 0
  let temp: ListNode | null = head
  while (temp !== null) {
    res = (res << 1) + temp.val
    temp = temp.next
  }

  return res
};
function test_01290() {
  let head = new ListNode(1)
  head.next = new ListNode(0)
  head.next.next = new ListNode(1)
  console.log(getDecimalValue(head));

}

test_01290()
