/**
 * ID:    00852
 * Title: Peak Index in a Mountain Array
 * Difficulty: Easy
 * Description: Let's call an array arr a mountain if the following properties hold:
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 *
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 * Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
 *
 * Example 1:
 *
 * Input: arr = [0,1,0] Output: 1
 *
 * Example 2:
 *
 * Input: arr = [0,2,1,0] Output: 1
 *
 * Example 3:
 *
 * Input: arr = [0,10,5,2] Output: 1
 *
 * Constraints:
 *
 * 3 <= arr.length <= 10 4
 * 0 <= arr[i] <= 10 6
 * arr is guaranteed to be a mountain array.
 *
 * Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?
 */

function peakIndexInMountainArray(arr: number[]): number {
  let res = -1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      res = i - 1
      break
    }
  }
  return res
};

function test_00852() {
  let arr = [0, 1, 0]
  console.log(peakIndexInMountainArray(arr))
  arr = [0, 10, 5, 2]
  console.log(peakIndexInMountainArray(arr))
}

test_00852()
