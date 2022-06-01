/**
 * ID:    01539
 * Title: Kth Missing Positive Number
 * Difficulty: Easy
 * Description: Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
 *
 * Find the k th positive integer that is missing from this array.
 *
 * Example 1:
 *
 * Input: arr = [2,3,4,7,11], k = 5 Output: 9 Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5 th missing positive integer is 9.
 *
 * Example 2:
 *
 * Input: arr = [1,2,3,4], k = 2 Output: 6 Explanation: The missing positive integers are [5,6,7,...]. The 2 nd missing positive integer is 6.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * 1 <= k <= 1000
 * arr[i] < arr[j] for 1 <= i < j <= arr.length
 */
function findKthPositive(arr: number[], k: number): number {
  let i = 0
  let cur = 1
  while (k > 0) {
    if (i < arr.length && arr[i] === cur) {
      i++
    } else {
      k--
    }
    cur++
  }
  return cur - 1
};

function test_01539() {
  console.log(findKthPositive([2, 3, 4, 7, 11], 5));
  console.log(findKthPositive([1, 2, 3, 4], 2));
}

test_01539()
