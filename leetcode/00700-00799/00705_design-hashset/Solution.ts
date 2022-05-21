/**
 * ID:    00705
 * Title: Design HashSet
 * Difficulty: Easy
 * Description: Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 *
 * void add(key) Inserts the value key into the HashSet.
 * bool contains(key) Returns whether the value key exists in the HashSet or not.
 * void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 *
 * Example 1:
 *
 * Input ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"] [[], [1], [2], [1], [3], [2], [2], [2], [2]] Output [null, null, null, true, false, null, true, null, false] Explanation MyHashSet myHashSet = new MyHashSet(); myHashSet.add(1); // set = [1] myHashSet.add(2); // set = [1, 2] myHashSet.contains(1); // return True myHashSet.contains(3); // return False, (not found) myHashSet.add(2); // set = [1, 2] myHashSet.contains(2); // return True myHashSet.remove(2); // set = [1] myHashSet.contains(2); // return False, (already removed)
 *
 * Constraints:
 *
 * 0 <= key <= 10 6
 * At most 10 4 calls will be made to add, remove, and contains.
 */
import { ListNode } from "../../utils/ListNode"
const BUCKET = 10007
class MyHashSet {

  store: Array<ListNode | null>
  constructor() {
    this.store = new Array<ListNode | null>(BUCKET).fill(null)
  }

  add(key: number): void {
    let index = key % BUCKET
    let cur = this.store[index]
    if (cur === null) {
      this.store[index] = new ListNode(key)
    } else {
      let found = false
      let pre = cur
      while (cur !== null) {
        if (cur.val === key) {
          found = true
          break
        }
        pre = cur
        cur = cur!.next
      }
      if (!found) {
        pre!.next = new ListNode(key)
      }
    }
  }

  remove(key: number): void {
    let index = key % BUCKET
    let cur = this.store[index]
    let pre = cur
    if (cur === null) {
      // do nothing
    } else {
      // find val
      let found = false
      while (cur !== null) {
        if (cur.val === key) {
          found = true
          break
        }
        pre = cur
        cur = cur!.next
      }
      if (found) {
        if (pre === cur) { // head element
          this.store[index] = cur!.next
        } else {
          pre!.next = cur!.next
        }
      }
    }
  }

  contains(key: number): boolean {
    let index = key % BUCKET
    let cur = this.store[index]

    if (cur === null) {
      return false
    } else {
      // find val
      while (cur !== null) {
        if (cur.val === key) {
          return true
        }
        cur = cur!.next
      }
      return false
    }
  }
}


function test_00705() {
  let myHashSet: MyHashSet = new MyHashSet();
  myHashSet.add(1);      // set = [1]
  myHashSet.add(2);      // set = [1, 2]
  myHashSet.add(10002);      // set = [1, 2,10002]
  console.log(myHashSet.contains(1)); // return True
  console.log(myHashSet.contains(3)); // return False, (not found)
  myHashSet.add(2);      // set = [1, 2]
  console.log(myHashSet.contains(2)); // return True
  console.log(myHashSet.contains(10002)); // return True
  myHashSet.remove(2);   // set = [1]
  console.log(myHashSet.contains(2)); // return False, (already removed)
}

test_00705()
