/**
 * ID:    01437
 * Title: Check If All 1's Are at Least Length K Places Away
 * Difficulty: Easy
 * Description: Given an binary array nums and an integer k, return true if all 1 's are at least k places away from each other, otherwise return false.
 *
 * Example 1:
 *
 * Input: nums = [1,0,0,0,1,0,0,1], k = 2 Output: true Explanation: Each of the 1s are at least 2 places away from each other.
 *
 * Example 2:
 *
 * Input: nums = [1,0,0,1,0,1], k = 2 Output: false Explanation: The second 1 and third 1 are only one apart from each other.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * 0 <= k <= nums.length
 * nums[i] is 0 or 1
 */
function kLengthApart(nums: number[], k: number): boolean {
  let last = -k - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - last <= k) {
        return false
      }
      last = i
    }
  }
  return true
};

function test_01437() {
  console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
  console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
}

test_01437()
