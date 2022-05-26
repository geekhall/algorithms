/**
 * ID:    01013
 * Title: Partition Array Into Three Parts With Equal Sum
 * Difficulty: Easy
 * Description: Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.
 *
 * Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
 *
 * Example 1:
 *
 * Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1] Output: true Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 * Example 2:
 *
 * Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1] Output: false
 *
 * Example 3:
 *
 * Input: arr = [3,3,6,5,-2,2,5,1,-9,4] Output: true Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 * Constraints:
 *
 * 3 <= arr.length <= 5 * 10 4
 * -10 4 <= arr[i] <= 10 4
 */
function canThreePartsEqualSum(arr: number[]): boolean {
  if (arr.length < 3)
    return false
  let sum = arr.reduce((pre, cur) => pre + cur)

  if (sum % 3 !== 0)
    return false

  let partSum = sum / 3

  let curSum = 0
  let left = 0
  for (; left < arr.length; left++) {
    curSum += arr[left]
    if (curSum === partSum) {
      break
    }
  }
  if (left >= arr.length - 2)
    return false

  curSum = 0
  let right = arr.length - 1
  for (; right > left; right--) {
    curSum += arr[right]
    if (curSum === partSum) {
      break
    }
  }
  if (right <= left + 1)
    return false

  return true
};

function test_01013() {
  let arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
  console.log(canThreePartsEqualSum(arr));
  arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
  console.log(canThreePartsEqualSum(arr));
  arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
  console.log(canThreePartsEqualSum(arr));

  arr = [6, 1, 1, 13, -1, 0, -10, 20]
  console.log(canThreePartsEqualSum(arr));  // expect false

}

test_01013()
