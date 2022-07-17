/**
 * ID:    00673
 * Title: Number of Longest Increasing Subsequence
 * Difficulty: Medium
 * Description: Given an integer array nums, return the number of longest increasing subsequences.
 *
 * Notice that the sequence has to be strictly increasing.
 *
 * Example 1:
 *
 * Input: nums = [1,3,5,4,7] Output: 2 Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
 *
 * Example 2:
 *
 * Input: nums = [2,2,2,2,2] Output: 5 Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2000
 * -10 6 <= nums[i] <= 10 6
 */
function findNumberOfLIS(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  let N = nums.length;

  // each number is a subsequence
  let length = Array.from({ length: N }, () => 1);
  // since each number is a subsequence,
  // the LIS for a single element array is 1
  let count = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (1 + length[j] > length[i]) {
          length[i] = 1 + length[j];
          count[i] = count[j];
        } else if (1 + length[j] == length[i]) {
          count[i] += count[j];
        }
      }
    }
  }

  let max = 0;
  for (let i of length) {
    max = Math.max(i, max);
  }

  let ans = 0;
  for (let i = 0; i < N; i++) {
    if (length[i] == max) {
      ans += count[i];
    }
  }

  return ans;
};

function test_00673() {
  console.log(findNumberOfLIS([1, 3, 5, 4, 7]))
  console.log(findNumberOfLIS([2, 2, 2, 2, 2]))
}

test_00673()
