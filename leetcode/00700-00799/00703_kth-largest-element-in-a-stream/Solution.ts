import { MinHeap } from "../../utils/MinHeap"

/**
 * ID:    00703
 * Title: Kth Largest Element in a Stream
 * Difficulty: Easy
 * Description: Design a class to find the k th largest element in a stream. Note that it is the k th largest element in the sorted order, not the k th distinct element.
 *
 * Implement KthLargest class:
 *
 * KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
 * int add(int val) Appends the integer val to the stream and returns the element representing the k th largest element in the stream.
 *
 * Example 1:
 *
 * Input ["KthLargest", "add", "add", "add", "add", "add"] [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]] Output [null, 4, 5, 5, 8, 8] Explanation KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]); kthLargest.add(3); // return 4 kthLargest.add(5); // return 5 kthLargest.add(10); // return 5 kthLargest.add(9); // return 8 kthLargest.add(4); // return 8
 *
 * Constraints:
 *
 * 1 <= k <= 10 4
 * 0 <= nums.length <= 10 4
 * -10 4 <= nums[i] <= 10 4
 * -10 4 <= val <= 10 4
 * At most 10 4 calls will be made to add.
 * It is guaranteed that there will be at least k elements in the array when you search for the k th element.
 */
import { PriorityQueue } from "../../utils/PriorityQueue"

class KthLargest {
  heap: PriorityQueue<number>
  size: number
  constructor(k: number, nums: number[]) {
    this.size = k
    this.heap = new PriorityQueue<number>((a, b) => a - b)
    for (let num of nums) {
      this.add(num)
    }
  }

  add(val: number): number {
    if (this.heap.size() < this.size) {
      this.heap.enqueue(val)
    } else if (val > this.heap.peek()!) {
      this.heap.dequeue()
      this.heap.enqueue(val)
    }
    return this.heap.peek()!
  }
}

function test_00703() {
  let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  console.log(kthLargest.add(3));   // return 4
  console.log(kthLargest.add(5));   // return 5
  console.log(kthLargest.add(10));  // return 5
  console.log(kthLargest.add(9));   // return 8
  console.log(kthLargest.add(4));   // return 8
}

test_00703()
