/**
 * ID:    00109
 * Title: Convert Sorted List to Binary Search Tree
 * Difficulty: Medium
 * Description: Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example 1:
 *
 * Input: head = [-10,-3,0,5,9] Output: [0,-3,9,-10,null,5] Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
 *
 * Example 2:
 *
 * Input: head = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in head is in the range [0, 2 * 10 4 ].
 * -10 5 <= Node.val <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode"
import { createList, ListNode } from "../../utils/ListNode"

// wrong answer (not height-balanced)
function sortedListToBST1(head: ListNode | null): TreeNode | null {
  if (!head)
    return null

  if (!head.next) // length = 1
    return new TreeNode(head.val, null, null)

  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let pre: TreeNode | null = null
  let cur: TreeNode | null = null
  let st = new Array()
  while (fast.next && fast.next.next) {
    cur = new TreeNode(slow?.val, pre, null)
    pre = cur
    slow = slow!.next
    fast = fast!.next.next
  }
  let root = new TreeNode(slow?.val, pre, null)
  cur = root
  while (slow && slow.next) {
    slow = slow.next
    cur.right = new TreeNode(slow.val, null, null)
    cur = cur?.right
  }
  return root
};
function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head)
    return null

  if (!head.next) // length = 1
    return new TreeNode(head.val, null, null)
  let arr = new Array()
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return sortedArrayToBST(arr)

};
function sortedArrayToBST(nums: number[]): TreeNode | null {

  let size = nums.length
  if (nums === null || size === 0)
    return null
  if (size === 1)
    return new TreeNode(nums[0], null, null)

  let mid = Math.trunc(size / 2)
  let root = new TreeNode(nums[mid], null, null)
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
};

function test_00109() {
  let head = createList([-10, -3, 0, 5, 9])
  console.log(sortedListToBST(head));
  head = createList([1, 2])
  console.log(sortedListToBST(head));
  head = createList([1, 2, 3])
  console.log(sortedListToBST(head));


}

test_00109()
