/**
 * ID:    00083
 * Title: Remove Duplicates from Sorted List
 * Difficulty: Easy
 * Description: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 * Example 1:
 *
 * Input: head = [1,1,2] Output: [1,2]
 *
 * Example 2:
 *
 * Input: head = [1,1,2,3,3] Output: [1,2,3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 */
import { ListNode, createList, printList } from "../../utils/ListNode"

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (head === null)
    return null
  let node: ListNode | null = head
  let arr = []
  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }
  // original list is sorted. so sort is not necessary.
  // arr = Array.from(new Set(arr)).sort((a, b) => a - b)
  arr = Array.from(new Set(arr))

  node = new ListNode(arr[0], null)
  head = node
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i], null)
    node = node.next
  }
  return head
};

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null)
    return null
  let node = head
  let next = head.next
  while (next !== null) {
    // find next different value

    while (next !== null && next!.val === node.val) {
      next = next!.next
    }
    if (next === null) {
      node.next = null
      break
    }
    // delete element
    node.next = next

    // move pointer
    node = next!
    next = next!.next
  }
  return head
};

function test_00083() {
  let head: ListNode = createList([1, 1, 2, 3, 3])
  printList(head)
  printList(deleteDuplicates(head));
}

test_00083()
