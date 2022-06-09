/**
 * ID:    00341
 * Title: Flatten Nested List Iterator
 * Difficulty: Medium
 * Description: You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.
 *
 * Implement the NestedIterator class:
 *
 * NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
 * int next() Returns the next integer in the nested list.
 * boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
 *
 * Your code will be tested with the following pseudocode:
 *
 * initialize iterator with nestedList res = [] while iterator.hasNext() append iterator.next() to the end of res return res
 *
 * If res matches the expected flattened list, then your code will be judged as correct.
 *
 * Example 1:
 *
 * Input: nestedList = [[1,1],2,[1,1]] Output: [1,1,2,1,1] Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
 *
 * Example 2:
 *
 * Input: nestedList = [1,[4,[6]]] Output: [1,4,6] Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
 *
 * Constraints:
 *
 * 1 <= nestedList.length <= 500
 * The values of the integers in the nested list is in the range [-10 6, 10 6 ].
 */

class NestedIterator {
  static ListNode = class {
    val: number
    next: NestedIterator.ListNode | null
    constructor(val: number, next: NestedIterator.ListNode | null) {
      this.val = val
      this.next = next
    }
  }
  head: NestedIterator.ListNode | null

  constructor(nestedList: NestedInteger[]) {
    this.head = null

  }
  createLL(nestedList: NestedInteger[]) {
    let head: Node | null = null
    let cur: Node | null = null
    for (let i = 0; i < nestedList.length; i++) {
      const node = new NestedIterator.ListNode(nestedList[i].getInteger(), null)
      if (head == null) {
        head = node
        cur = node
      } else {
        cur.next = node
        cur = node
      }
    }
    return head
  }

  hasNext(): boolean {

  }

  next(): number {

  }
}

function test_00341() {
  let ni = new NestedIterator([[1, 1], 2, [1, 1]])
}

test_00341()
