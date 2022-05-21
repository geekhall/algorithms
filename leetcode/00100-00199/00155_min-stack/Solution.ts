/**
 * ID:    00155
 * Title: Min Stack
 * Difficulty: Easy
 * Description: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 *
 * Example 1:
 *
 * Input ["MinStack","push","push","push","getMin","pop","top","getMin"] [[],[-2],[0],[-3],[],[],[],[]] Output [null,null,null,null,-3,null,0,-2] Explanation MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); // return -3 minStack.pop(); minStack.top(); // return 0 minStack.getMin(); // return -2
 *
 * Constraints:
 *
 * -2 31 <= val <= 2 31 - 1
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
 * At most 3 * 10 4 calls will be made to push, pop, top, and getMin.
 */
class MinStack {
  m: Map<number, number>
  min: number
  st: number[]
  constructor() {
    this.st = new Array<number>()
    this.m = new Map<number, number>()
    this.min = Number.MAX_SAFE_INTEGER
  }

  push(val: number): void {
    this.st.push(val)
    if (this.min === undefined || val < this.min) {
      this.min = val
    }
    if (this.m.get(val) === undefined) {
      this.m.set(val, 1)
    } else {
      this.m.set(val, this.m.get(val)! + 1)
    }
  }

  pop(): void {
    if (this.st.length > 0) {
      let val = this.st.pop()
      if (this.m.get(val!) === 1) {
        this.m.delete(val!)
        this.min = Array.from(this.m.keys()).sort((a, b) => a - b)[0]
      } else {
        this.m.set(val!, this.m.get(val!)! - 1)
      }
    }
  }

  top(): number {
    return this.st[this.st.length - 1]
  }

  getMin(): number {
    return this.min
  }
}


function test_00155() {
  let minStack: MinStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // return -3
  minStack.pop();
  console.log(minStack.top());    // return 0
  console.log(minStack.getMin()); // return -2
}

test_00155()
