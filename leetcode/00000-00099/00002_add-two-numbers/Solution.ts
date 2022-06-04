/**
 * ID:    00002
 * Title: Add Two Numbers
 * Difficulty: Medium
 * Description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8] Explanation: 342 + 465 = 807.
 *
 * Example 2:
 *
 * Input: l1 = [0], l2 = [0] Output: [0]
 *
 * Example 3:
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */
import { ListNode } from "../../utils/ListNode"
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let res = new ListNode(0);
  let cur = res;
  let carry = 0;
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    cur.next = new ListNode(sum);
    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    cur.next = new ListNode(carry);
  }
  return res.next;
};

function test_00002() {
  let l1 = ListNode.create([2, 4, 3]);
  let l2 = ListNode.create([5, 6, 4]);
  let res = addTwoNumbers(l1, l2);
  ListNode.print(res);
  l1 = ListNode.create([0]);
  l2 = ListNode.create([0]);
  res = addTwoNumbers(l1, l2);
  ListNode.print(res);
  l1 = ListNode.create([9, 9, 9, 9, 9, 9, 9]);
  l2 = ListNode.create([9, 9, 9, 9]);
  res = addTwoNumbers(l1, l2);
  ListNode.print(res);
}

test_00002()
