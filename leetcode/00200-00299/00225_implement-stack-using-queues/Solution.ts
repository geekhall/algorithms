/**
 * ID:    00225
 * Title: Implement Stack using Queues
 * Difficulty: Easy
 * Description: Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 *
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 *
 * You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 *
 * Example 1:
 *
 * Input ["MyStack", "push", "push", "top", "pop", "empty"] [[], [1], [2], [], [], []] Output [null, null, null, 2, 2, false] Explanation MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // return 2 myStack.pop(); // return 2 myStack.empty(); // return False
 *
 * Constraints:
 *
 * 1 <= x <= 9
 * At most 100 calls will be made to push, pop, top, and empty.
 * All the calls to pop and top are valid.
 *
 * Follow-up: Can you implement the stack using only one queue?
 */
class MyStack {
  q1: Array<number>
  q2: Array<number>
  constructor(q1?: Array<number>, q2?: Array<number>) {
    this.q1 = q1 === undefined ? new Array<number>() : q1
    this.q2 = q2 === undefined ? new Array<number>() : q2
  }

  push(x: number): void {
    if (this.q1.length === 0 && this.q2.length === 0) {
      this.q1.push(x)
    } else if (this.q1.length === 0) {
      this.q1.push(x)
      while (this.q2.length > 0) {
        this.q1.push(this.q2.shift()!)
      }
    } else if (this.q2.length === 0) {
      this.q2.push(x)
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift()!)
      }
    }
  }

  pop(): number {
    return this.q1.length > 0 ? this.q1.shift()! : this.q2.shift()!
  }

  top(): number {
    return this.q1.length > 0 ? this.q1[0] : this.q2[0]
  }

  empty(): boolean {
    return this.q1.length === 0 && this.q2.length === 0
  }
}

function test_00225() {
  let myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  console.log(myStack.top());// return 2
  console.log(myStack.pop()); // return 2
  console.log(myStack.empty());// return False
}

test_00225()
