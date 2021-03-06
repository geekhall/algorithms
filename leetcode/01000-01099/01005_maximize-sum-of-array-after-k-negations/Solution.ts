/**
 * ID:    01005
 * Title: Maximize Sum Of Array After K Negations
 * Difficulty: Easy
 * Description: Given an integer array nums and an integer k, modify the array in the following way:
 *
 * choose an index i and replace nums[i] with -nums[i].
 *
 * You should apply this process exactly k times. You may choose the same index i multiple times.
 *
 * Return the largest possible sum of the array after modifying it in this way.
 *
 * Example 1:
 *
 * Input: nums = [4,2,3], k = 1 Output: 5 Explanation: Choose index 1 and nums becomes [4,-2,3].
 *
 * Example 2:
 *
 * Input: nums = [3,-1,0,2], k = 3 Output: 6 Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
 *
 * Example 3:
 *
 * Input: nums = [2,-3,-1,5,-4], k = 2 Output: 13 Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * -100 <= nums[i] <= 100
 * 1 <= k <= 10 4
 */
// Min Heap
import { MinHeap } from "../../utils/MinHeap";
function largestSumAfterKNegations(nums: number[], k: number): number {
  let heap = new MinHeap()
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i])
  }
  for (let i = 0; i < k; i++) {
    heap.insert(-heap.extractMin()!)
  }
  return heap.getSum()
};

function test_01005() {
  let nums = [4, 2, 3], k = 1
  console.log(largestSumAfterKNegations(nums, k));
  nums = [3, -1, 0, 2], k = 3
  console.log(largestSumAfterKNegations(nums, k));
  nums = [2, -3, -1, 5, -4], k = 2
  console.log(largestSumAfterKNegations(nums, k));
}

test_01005()
