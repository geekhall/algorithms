/**
 * ID:    00707
 * Title: Design Linked List
 * Difficulty: Medium
 * Description: Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
 * A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 *
 * Implement the MyLinkedList class:
 *
 * MyLinkedList() Initializes the MyLinkedList object.
 * int get(int index) Get the value of the index th node in the linked list. If the index is invalid, return -1.
 * void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * void addAtTail(int val) Append a node of value val as the last element of the linked list.
 * void addAtIndex(int index, int val) Add a node of value val before the index th node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
 * void deleteAtIndex(int index) Delete the index th node in the linked list, if the index is valid.
 *
 * Example 1:
 *
 * Input ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"] [[], [1], [3], [1, 2], [1], [1], [1]] Output [null, null, null, null, 2, null, 3] Explanation MyLinkedList myLinkedList = new MyLinkedList(); myLinkedList.addAtHead(1); myLinkedList.addAtTail(3); myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3 myLinkedList.get(1); // return 2 myLinkedList.deleteAtIndex(1); // now the linked list is 1->3 myLinkedList.get(1); // return 3
 *
 * Constraints:
 *
 * 0 <= index, val <= 1000
 * Please do not use the built-in LinkedList library.
 * At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
 */

class MyLinkedList {
  val: number
  next: MyLinkedList | null
  prev: MyLinkedList | null
  head: MyLinkedList | null
  tail: MyLinkedList | null
  length: number
  constructor() {
    this.val = 0
    this.length = 0
    this.next = null
    this.prev = null
    this.head = null
    this.tail = null
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1
    }
    let curr = this.head
    let i = 0
    while (curr) {
      if (i === index) {
        return curr.val
      }
      curr = curr.next
      i++
    }
    return -1
  }

  addAtHead(val: number): void {
    let node = new MyLinkedList()
    node.val = val
    node.next = this.head
    if (this.head) {
      this.head.prev = node
    }
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
    this.length++
  }

  addAtTail(val: number): void {
    let node = new MyLinkedList()
    node.val = val
    node.next = null
    if (this.tail) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
  }

  addAtIndex(index: number, val: number): void {
    let node = new MyLinkedList()
    node.val = val
    node.next = null
    node.prev = null
    if (index === 0) {
      node.next = this.head
      if (this.head) {
        this.head.prev = node
      }
      this.head = node
    } else {
      let curr = this.head
      let i = 0
      while (curr) {
        if (i === index - 1) {
          node.next = curr.next
          node.prev = curr
          curr.next = node
          if (node.next) {
            node.next.prev = node
          }
          if (i === this.length - 1) {
            this.tail = node
          }
          break
        }
        curr = curr.next
        i++
      }
    }
    this.length++
  }
  print(): void {
    let arr = []
    let curr = this.head
    while (curr !== null) {
      arr.push(curr.val)
      curr = curr.next
    }
    console.log(arr.join(' -> '));
  }
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return
    }

    if (index === 0) {
      if (this.head) {
        this.head = this.head.next
        if (this.head) {
          this.head.prev = null
        }
      }
    } else if (index === this.length - 1) {
      if (this.tail) {
        this.tail = this.tail.prev
        if (this.tail) {
          this.tail.next = null
        }
      }
    } else {
      let curr = this.head
      let i = 0
      while (curr) {
        if (i === index - 1) {
          curr.next = curr.next!.next
          if (curr.next) {
            curr.next.prev = curr
          }
          break
        }
        curr = curr.next
        i++
      }
    }
    this.length--
  }
}


function test_00707() {
  let myLinkedList = new MyLinkedList()
  myLinkedList.addAtHead(1);
  myLinkedList.addAtTail(3);
  myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
  myLinkedList.print()
  console.log(myLinkedList.get(1)); // return 2
  myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
  myLinkedList.print()
  console.log(myLinkedList.get(1)); // return 3
}

test_00707()
