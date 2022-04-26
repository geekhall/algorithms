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

function to_list(arr: number[]): ListNode {
  let head = new ListNode()
  let n = head.next
  while (arr.length > 0) {

    let tempNode = new ListNode(arr.shift())
    if (n === null)
      n = tempNode
    else
      n.next = tempNode
  }
  return head
}
function test_00234() {
  // Input: head = [1,2,2,1]
  // Output: true
  let head: ListNode = new ListNode(1)
  head.next = new ListNode(2)
  head.next.next = new ListNode(1)
  // head.next.next.next = null
  // // head.next.next.next = new ListNode(2)
  // // head.next.next.next.next = new ListNode(1)
  // head.next.next.next.next.next = null
  console.log(isPalindrome(head));

  // Input: head = [1,2]
  // Outpute
}

function printList(list: ListNode | null) {
  while (list !== null) {
    console.log(list.val, " -> ");
    list = list.next
  }
}
test_00234()

let head = new ListNode()
console.log(head);          // ListNode { val: 0, next: null }
console.log(typeof head);   // object
console.log(head === null); // false
console.log(head.val);      // 0
console.log(head.next);     // null

let arr: number[] = [1, 2, 3, 4, 5]
let l: ListNode = to_list(arr)
console.log(l);
console.log(l.val);
printList(l)

