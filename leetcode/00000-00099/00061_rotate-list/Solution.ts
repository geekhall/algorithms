/**
 * ID:    00061
 * Title: Rotate List
 * Difficulty: Medium
 * Description: Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], k = 2 Output: [4,5,1,2,3]
 *
 * Example 2:
 *
 * Input: head = [0,1,2], k = 4 Output: [2,0,1]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10 9
 */
import { ListNode } from "../../utils/ListNode"
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null)
    return null
  let res: ListNode | null = null
  const list2arr = (head: ListNode | null): ListNode[] => {
    let res = new Array()
    while (head !== null) {
      res.push(head)
      head = head.next
    }
    return res
  }
  let arr = list2arr(head)

  if (k >= arr.length) {
    k = k % arr.length
  }
  if (k === 0)
    return head
  // new head
  res = arr[arr.length - k]
  // let the previous node of new head point to null
  arr[arr.length - k - 1].next = null
  // original tail node point to original head node
  arr[arr.length - 1].next = arr[0]
  return res
};

function test_00061() {
  let head = ListNode.create([1, 2, 3, 4, 5]), k = 2
  ListNode.print(rotateRight(head, k));
  head = ListNode.create([0, 1, 2]), k = 2
  ListNode.print(rotateRight(head, k));

}

test_00061()
