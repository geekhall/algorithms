/**
 * ID:    00347
 * Title: Top K Frequent Elements
 * Difficulty: Medium
 * Description: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]
 *
 * Example 2:
 *
 * Input: nums = [1], k = 1 Output: [1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
// Similar to 00692_top-k-frequent-words
import { PriorityQueueTemplate } from '../../utils/PriorityQueue'
function topKFrequent(nums: number[], k: number): number[] {
  let pq = new PriorityQueueTemplate<number[]>((a: number[], b: number[]) => {
    return b[1] - a[1]
  })
  let m = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], (m.get(nums[i]) || 0) + 1)
  }
  for (let [num, count] of m) {
    pq.enqueue([num, count])
  }
  let res = []
  for (let i = 0; i < k; i++) {
    res.push(pq.dequeue()![0])
  }
  return res
};

function test_00347() {
  let nums = [1, 1, 1, 2, 2, 3], k = 2
  console.log(topKFrequent(nums, k))
  nums = [1], k = 1
  console.log(topKFrequent(nums, k))
  nums = [4, 1, -1, 2, -1, 2, 3], k = 2
  console.log(topKFrequent(nums, k))
  2
}

test_00347()
