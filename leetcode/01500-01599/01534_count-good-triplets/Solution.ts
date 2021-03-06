/**
 * ID:    01534
 * Title: Count Good Triplets
 * Difficulty: Easy
 * Description: Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
 *
 * A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
 *
 * 0 <= i < j < k < arr.length
 * |arr[i] - arr[j]| <= a
 * |arr[j] - arr[k]| <= b
 * |arr[i] - arr[k]| <= c
 *
 * Where |x| denotes the absolute value of x.
 *
 * Return the number of good triplets.
 *
 * Example 1:
 *
 * Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3 Output: 4 Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
 *
 * Example 2:
 *
 * Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1 Output: 0 Explanation: No triplet satisfies all conditions.
 *
 * Constraints:
 *
 * 3 <= arr.length <= 100
 * 0 <= arr[i] <= 1000
 * 0 <= a, b, c <= 1000
 */
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let res: number = 0
  let n: number = arr.length
  if (n < 3) {
    return 0
  }

  for (let i: number = 0; i < n - 2; i++) {
    for (let j: number = i + 1; j < n - 1; j++) {
      for (let k: number = j + 1; k < n; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c) {
          res++
        }
      }
    }
  }
  return res
};


function test_01534() {
  // Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
  // Output: 4
  // Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
  let arr: number[] = [3, 0, 1, 1, 9, 7]
  console.log(countGoodTriplets(arr, 7, 2, 3)); // the answer is 4

  // Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
  // Output: 0
  // Explanation: No triplet satisfies all conditions.
  let arr1: number[] = [1, 1, 2, 2, 3]
  console.log(countGoodTriplets(arr1, 0, 0, 1)); // the answer is 0

}

test_01534()
