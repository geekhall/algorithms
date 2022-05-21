/**
 * ID:    02181
 * Title: Merge Nodes in Between Zeros
 * Difficulty: Medium
 * Description: You are given the head of a linked list, which contains a series of integers separated by 0 's. The beginning and end of the linked list will have Node.val == 0.
 *
 * For every two consecutive 0 's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0 's.
 *
 * Return the head of the modified linked list.
 *
 * Example 1:
 *
 * Input: head = [0,3,1,0,4,5,2,0] Output: [4,11] Explanation: The above figure represents the given linked list. The modified list contains - The sum of the nodes marked in green: 3 + 1 = 4. - The sum of the nodes marked in red: 4 + 5 + 2 = 11.
 *
 * Example 2:
 *
 * Input: head = [0,1,0,3,0,2,2,0] Output: [1,3,4] Explanation: The above figure represents the given linked list. The modified list contains - The sum of the nodes marked in green: 1 = 1. - The sum of the nodes marked in red: 3 = 3. - The sum of the nodes marked in yellow: 2 + 2 = 4.
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [3, 2 * 10 5 ].
 * 0 <= Node.val <= 1000
 * There are no two consecutive nodes with Node.val == 0.
 * The beginning and end of the linked list have Node.val == 0.
 */
import { ListNode } from "../../utils/ListNode"
function mergeNodes(head: ListNode | null): ListNode | null {
  if (head === null)
    return null
  if (head.next === null) {
    if (head.val === 0)
      return null
    return head
  }
  let cur: ListNode | null = head.next
  let pre: ListNode | null = head

  while (cur !== null) {
    if (cur.val !== 0) {
      pre!.next = cur.next
    } else {
      if (cur.next === null) { // last 0
        pre!.next = null
      } else {
        pre = pre!.next
      }
    }
    pre!.val += cur.val
    cur = cur.next
  }

  return head
};

function test_02181() {
  let head = ListNode.create([0, 3, 1, 0, 4, 5, 2, 0])
  ListNode.print(head)
  let res = mergeNodes(head)
  ListNode.print(res)
  head = ListNode.create([3, 1, 0, 4, 5, 2, 0])
  ListNode.print(head)
  res = mergeNodes(head)
  ListNode.print(res)

  head = ListNode.create([3, 1, 0, 4, 5, 2])
  ListNode.print(head)
  res = mergeNodes(head)
  ListNode.print(res)

  head = ListNode.create([0, 3, 1, 0, 4, 5, 2])
  ListNode.print(head)
  res = mergeNodes(head)
  ListNode.print(res)

}

test_02181()
