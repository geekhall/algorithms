/**
 * ID:    01962
 * Title: Remove Stones to Minimize the Total
 * Difficulty: Medium
 * Description: You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the i th pile, and an integer k. You should apply the following operation exactly k times:
 *
 * Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
 *
 * Notice that you can apply the operation on the same pile more than once.
 *
 * Return the minimum possible total number of stones remaining after applying the k operations.
 *
 * floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).
 *
 * Example 1:
 *
 * Input: piles = [5,4,9], k = 2 Output: 12 Explanation: Steps of a possible scenario are: - Apply the operation on pile 2. The resulting piles are [5,4, 5 ]. - Apply the operation on pile 0. The resulting piles are [ 3,4,5]. The total number of stones in [3,4,5] is 12.
 *
 * Example 2:
 *
 * Input: piles = [4,3,6,7], k = 3 Output: 12 Explanation: Steps of a possible scenario are: - Apply the operation on pile 2. The resulting piles are [4,3, 3,7]. - Apply the operation on pile 3. The resulting piles are [4,3,3, 4 ]. - Apply the operation on pile 0. The resulting piles are [ 2,3,3,4]. The total number of stones in [2,3,3,4] is 12.
 *
 * Constraints:
 *
 * 1 <= piles.length <= 10 5
 * 1 <= piles[i] <= 10 4
 * 1 <= k <= 10 5
 */
import { PriorityQueue } from '../../utils/PriorityQueue';
// PriorityQueue 100%, 100%
function minStoneSum(piles: number[], k: number): number {
  let count = 0;
  let pq = new PriorityQueue<number>((a, b) => b - a);
  for (let i = 0; i < piles.length; i++) {
    pq.enqueue(piles[i]);
  }
  let remaining = piles.reduce((a, b) => a + b, 0);
  while (count < k) {
    let cur = pq.dequeue()!;
    count++;
    remaining -= Math.floor(cur / 2);
    pq.enqueue(Math.ceil(cur / 2));
  }
  return remaining;
};

function test_01962() {
  let piles = [5, 4, 9], k = 2
  console.log(minStoneSum(piles, k))
  piles = [4, 3, 6, 7], k = 3
  console.log(minStoneSum(piles, k))
}

test_01962()
