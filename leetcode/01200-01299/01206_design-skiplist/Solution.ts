/**
 * ID:    01206
 * Title: Design Skiplist
 * Difficulty: Hard
 * Description: Design a Skiplist without using any built-in libraries.
 *
 * A skiplist is a data structure that takes O(log(n)) time to add, erase and search. Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists is just simple linked lists.
 *
 * For example, we have a Skiplist containing [30,40,50,60,70,90] and we want to add 80 and 45 into it. The Skiplist works this way:
 *
 * Artyom Kalinin [CC BY-SA 3.0], via Wikimedia Commons
 *
 * You can see there are many layers in the Skiplist. Each layer is a sorted linked list. With the help of the top layers, add, erase and search can be faster than O(n). It can be proven that the average time complexity for each operation is O(log(n)) and space complexity is O(n).
 *
 * See more about Skiplist: https://en.wikipedia.org/wiki/Skip_list
 *
 * Implement the Skiplist class:
 *
 * Skiplist() Initializes the object of the skiplist.
 * bool search(int target) Returns true if the integer target exists in the Skiplist or false otherwise.
 * void add(int num) Inserts the value num into the SkipList.
 * bool erase(int num) Removes the value num from the Skiplist and returns true. If num does not exist in the Skiplist, do nothing and return false. If there exist multiple num values, removing any one of them is fine.
 *
 * Note that duplicates may exist in the Skiplist, your code needs to handle this situation.
 *
 * Example 1:
 *
 * Input ["Skiplist", "add", "add", "add", "search", "add", "search", "erase", "erase", "search"] [[], [1], [2], [3], [0], [4], [1], [0], [1], [1]] Output [null, null, null, null, false, null, true, false, true, false] Explanation Skiplist skiplist = new Skiplist(); skiplist.add(1); skiplist.add(2); skiplist.add(3); skiplist.search(0); // return False skiplist.add(4); skiplist.search(1); // return True skiplist.erase(0); // return False, 0 is not in skiplist. skiplist.erase(1); // return True skiplist.search(1); // return False, 1 has already been erased.
 *
 * Constraints:
 *
 * 0 <= num, target <= 2 * 10 4
 * At most 5 * 10 4 calls will be made to search, add, and erase.
 */
import { Skiplist as Skiplist } from '../../utils/SkipList';
// class SkipListNode {
//   val: number;
//   next: SkipListNode | null;
//   down: SkipListNode | null;
//   constructor(val: number, next: SkipListNode | null, down: SkipListNode | null) {
//     this.val = val;
//     this.next = next;
//     this.down = down;
//   }
// }
// class Skiplist {
//   static PROBABILITY = 0.5;

//   public head: SkipListNode | null = null
//   public size: number = 0;
//   public maxLevel: number = 0;
//   public constructor() {
//     this.head = new SkipListNode(-1, null, null)
//   }

//   public print(): void {
//     let cur = this.head
//     while (cur) {
//       let arr = []
//       let cur_level: SkipListNode | null = cur
//       while (cur_level) {
//         arr.push(cur_level.val)
//         cur_level = cur_level.next
//       }
//       console.log("## : ", arr.join(' -> '));
//       cur = cur.down
//     }
//   }
//   public search(target: number): boolean {
//     let cur = this.head
//     while (cur !== null) {
//       while (cur.next && cur.next.val < target) {
//         cur = cur.next
//       }
//       if (cur.next && target === cur.next.val) {
//         return true
//       }
//       cur = cur.down
//     }
//     return false
//   }
//   public add(num: number): void {
//     let stack = new Array<SkipListNode>()
//     let cur = this.head
//     while (cur) {
//       while (cur.next && cur.next.val < num) {
//         cur = cur.next
//       }
//       stack.push(cur)
//       cur = cur.down
//     }
//     let insert = true
//     let down = null
//     while (insert && stack.length > 0) {
//       cur = stack.pop()!
//       cur.next = new SkipListNode(num, cur.next, down)
//       down = cur.next
//       insert = Math.random() < Skiplist.PROBABILITY
//     }
//     if (insert)
//       this.head = new SkipListNode(-1, null, this.head)
//   }

//   public erase(num: number): boolean {
//     let cur = this.head
//     let found = false
//     while (cur) {
//       while (cur.next && cur.next.val < num) {
//         cur = cur.next
//       }
//       if (cur.next && cur.next.val === num) {
//         cur.next = cur.next.next
//         found = true
//       }
//       cur = cur.down
//     }
//     return found
//   }
// }

function test_01206() {
  let skiplist = new Skiplist()
  skiplist.add(1)
  skiplist.add(2)
  skiplist.add(3)
  skiplist.add(4)
  skiplist.add(5)
  skiplist.add(6)
  skiplist.add(3)
  skiplist.add(5)
  skiplist.add(8)
  skiplist.add(9)
  skiplist.print()
  console.log(skiplist.search(0)) // false
  skiplist.add(4)
  console.log(skiplist.search(1)) // true
  console.log(skiplist.erase(0))  // false
  console.log(skiplist.erase(1))  // true

  console.log(skiplist.search(1)) // false
}

test_01206()
