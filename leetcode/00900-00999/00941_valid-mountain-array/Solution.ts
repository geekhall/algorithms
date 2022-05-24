/**
 * ID:    00941
 * Title: Valid Mountain Array
 * Difficulty: Easy
 * Description: Given an array of integers arr, return true if and only if it is a valid mountain array.
 *
 * Recall that arr is a mountain array if and only if:
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 *
 * arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 * arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Example 1:
 *
 * Input: arr = [2,1] Output: false
 *
 * Example 2:
 *
 * Input: arr = [3,5,5] Output: false
 *
 * Example 3:
 *
 * Input: arr = [0,3,2,1] Output: true
 *
 * Constraints:
 *
 * 1 <= arr.length <= 10 4
 * 0 <= arr[i] <= 10 4
 */
function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3)
    return false
  let ascendingCount = 0
  let descendingCount = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false
    } else if (arr[i] > arr[i - 1]) { // asc
      if (descendingCount > 0) {
        return false
      }
      ascendingCount++
    } else {
      descendingCount++
    }
  }
  if (descendingCount === 0 || ascendingCount === 0)
    return false
  return true
};

function test_00941() {
  let arr = [1, 2, 3, 4, 5]
  console.log(validMountainArray(arr));
  arr = [5, 4, 3, 2, 1]
  console.log(validMountainArray(arr));
  arr = [0, 2, 3, 4, 5, 2, 1, 0]
  console.log(validMountainArray(arr));
}

test_00941()
