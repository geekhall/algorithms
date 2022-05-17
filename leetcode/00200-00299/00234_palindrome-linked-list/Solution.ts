/**
 * ID:    00234
 * Title: Palindrome Linked List
 * Difficulty: Easy
 * Description: Given the head of a singly linked list, return true if it is a palindrome.
 *
 * Example 1:
 *
 * Input: head = [1,2,2,1] Output: true
 *
 * Example 2:
 *
 * Input: head = [1,2] Output: false
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 10 5 ].
 * 0 <= Node.val <= 9
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
 */
import { ListNode, createList, printList } from "../../utils/ListNode"

function isPalindrome(head: ListNode | null): boolean {
  let fast = head
  let slow = head
  let arr: number[] = []
  while (fast != null && fast.next != null) {
    arr.push(slow!.val)
    slow = slow!.next
    fast = fast.next.next
  }
  if (fast != null) {
    slow = slow!.next
  }

  while (slow != null) {
    if (arr.pop() !== slow!.val)
      return false
    slow = slow.next
  }

  return true
};
function test_00234() {
  // Input: head = [1,2,2,1]
  // Output: true
  let head = createList([1, 2, 2, 1])
  console.log(isPalindrome(head));

  // Input: head = [1,2]
  // Output: false
  head = createList([1, 2])
  console.log(isPalindrome(head));
}

test_00234()
