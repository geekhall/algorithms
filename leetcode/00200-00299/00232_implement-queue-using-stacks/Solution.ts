/**
 * ID:    00232
 * Title: Implement Queue using Stacks
 * Difficulty: Easy
 * Description: Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 *
 * You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 *
 * Example 1:
 *
 * Input ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []] Output [null, null, null, 1, 1, false] Explanation MyQueue myQueue = new MyQueue(); myQueue.push(1); // queue is: [1] myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue) myQueue.peek(); // return 1 myQueue.pop(); // return 1, queue is [2] myQueue.empty(); // return false
 *
 * Constraints:
 *
 * 1 <= x <= 9
 * At most 100 calls will be made to push, pop, peek, and empty.
 * All the calls to pop and peek are valid.
 *
 * Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
 */
class MyQueue {
  s1: Array<number>
  s2: Array<number>
  constructor(s1?: Array<number>, s2?: Array<number>) {
    this.s1 = s1 === undefined ? new Array<number>() : s1
    this.s2 = s2 === undefined ? new Array<number>() : s2
  }

  push(x: number): void {
    if (this.s1.length === 0 && this.s2.length === 0) {
      this.s1.push(x)
    } else if (this.s1.length === 0) {
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop()!)
      }
      this.s2.push(x)
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop()!)
      }
    } else if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop()!)
      }
      this.s1.push(x)
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop()!)
      }
    }
  }

  pop(): number {
    return this.s1.length > 0 ? this.s1.pop()! : this.s2.pop()!
  }

  peek(): number {
    return this.s1.length > 0 ? this.s1[this.s1.length - 1] : this.s2[this.s2.length - 1]
  }

  empty(): boolean {
    return this.s1.length === 0 && this.s2.length === 0
  }
}


function test_00232() {
  let myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  myQueue.push(3); // queue is: [1, 2, 3] (leftmost is front of the queue)
  console.log(myQueue.peek()); // return 1
  console.log(myQueue.pop()); // return 1, queue is [2]
  console.log(myQueue.empty()); // return false
}

test_00232()
