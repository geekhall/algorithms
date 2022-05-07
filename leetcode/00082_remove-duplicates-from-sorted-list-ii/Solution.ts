/**
 * ID:    00082
 * Title: Remove Duplicates from Sorted List II
 * Difficulty: Medium
 * Description: Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,3,4,4,5] Output: [1,2,5]
 *
 * Example 2:
 *
 * Input: head = [1,1,1,2,3] Output: [2,3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function createNode(arr: number[]): ListNode {
  let head = new ListNode(arr[0])
  let node = head
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i], null)
    node = node.next
  }
  return head
}

function printNode(node: ListNode | null) {
  let arr = []
  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }
  console.log(arr.join(' -> '));
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let prev = head;
  let curr = head;
  let res = head;
  let count = 0;
  while (curr !== null) {
    // curr is the last element
    if (curr.next === null) {
      if (count > 0) {
        if (curr.val === res!.val) {
          res = null;
        } else
          prev!.next = null;
      }
      break;
    }
    if (curr.val !== curr.next.val) {
      if (count === 0) { // not duplicate
        prev = curr;
        curr = curr.next;
      } else {           // duplicate
        count = 0;
        if (curr.val === res!.val) { // head node
          prev = curr.next;
          res = prev;
          curr = curr.next;
        } else { // remove duplicated nodes
          prev!.next = curr.next;
          curr = curr.next;
        }
      }
    } else {// curr is duplicate value
      curr = curr.next;
      count++;
    }
  }

  return res;
}

function test_00082() {
  let head: ListNode = createNode([1, 1, 2, 3, 3])
  printNode(head)
  printNode(deleteDuplicates(head));
  head = createNode([1, 1, 1, 2, 3])
  printNode(head)
  printNode(deleteDuplicates(head));
}

test_00082()
