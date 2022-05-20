// Definition for singly - linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  static create(arr: number[]): ListNode | null {
    if (!arr || arr.length === 0)
      return null
    let head = new ListNode(arr[0])
    let node = head
    for (let i = 1; i < arr.length; i++) {
      node.next = new ListNode(arr[i], null)
      node = node.next
    }
    return head
  }
}

export function createList(arr: number[]): ListNode {
  let head = new ListNode(arr[0])
  let node = head
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i], null)
    node = node.next
  }
  return head
}

export function printList(node: ListNode | null) {
  let arr = []
  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }
  console.log(arr.join(' -> '));
}
