/**
 * ID:    00922
 * Title: Sort Array By Parity II
 * Difficulty: Easy
 * Description: Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
 *
 * Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
 *
 * Return any answer array that satisfies this condition.
 *
 * Example 1:
 *
 * Input: nums = [4,2,5,7] Output: [4,5,2,7] Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 *
 * Example 2:
 *
 * Input: nums = [2,3] Output: [2,3]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 2 * 10 4
 * nums.length is even.
 * Half of the integers in nums are even.
 * 0 <= nums[i] <= 1000
 *
 * Follow Up: Could you solve it in-place?
 */
function sortArrayByParityII(nums: number[]): number[] {
  let n = nums.length, odd = 1, even = 0
  let res: number[] = new Array(n).fill(0)
  nums.forEach((v, i) => {
    if (v % 2) {// odd
      res[odd] = v
      odd += 2
    } else {
      res[even] = v
      even += 2
    }
  })
  return res
}

function test_00922() {
  let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]
  console.log(arr);
  let res = sortArrayByParityII(arr)
  console.log(res)
}

test_00922()
