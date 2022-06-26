/**
 * ID:    00658
 * Title: Find K Closest Elements
 * Difficulty: Medium
 * Description: Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 *
 * An integer a is closer to x than an integer b if:
 *
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 *
 * Example 1:
 *
 * Input: arr = [1,2,3,4,5], k = 4, x = 3 Output: [1,2,3,4]
 *
 * Example 2:
 *
 * Input: arr = [1,2,3,4,5], k = 4, x = -1 Output: [1,2,3,4]
 *
 * Constraints:
 *
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10 4
 * arr is sorted in ascending order.
 * -10 4 <= arr[i], x <= 10 4
 */
// 100%, 100%
function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0, right = arr.length - k;
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (x - arr[mid] > arr[mid + k] - x)
      left = mid + 1;
    else
      right = mid;
  }
  return arr.slice(left, left + k);
};

function test_00658() {
  let arr = [1, 2, 3, 4, 5], k = 4, x = 3
  console.log(findClosestElements(arr, k, x))
  arr = [1, 2, 3, 4, 5], k = 4, x = -1
  console.log(findClosestElements(arr, k, x))
  arr = [1, 1, 1, 10, 10, 10], k = 1, x = 9
  console.log(findClosestElements(arr, k, x))
}

test_00658()
