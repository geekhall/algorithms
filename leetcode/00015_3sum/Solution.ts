/**
 * ID:    00015
 * Title: 3Sum
 * Difficulty: Medium
 * Description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4] Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 *
 * Input: nums = [] Output: []
 *
 * Example 3:
 *
 * Input: nums = [0] Output: []
 *
 * Constraints:
 *
 * 0 <= nums.length <= 3000
 * -10 5 <= nums[i] <= 10 5
 */
function threeSum(nums: number[]): number[][] {
  let res: number[][] = []
  if (nums.length < 2)
    return res

  nums.sort()
  let right = nums.length - 1
  for (let first = 0; first < nums.length - 1; first++) {
    if (first >= 1 && nums[first] === nums[first - 1])
      continue


    for (let left = first + 1; left < nums.length - 1; left++) {
      if (left > first + 1 && nums[left] === nums[left - 1])
        continue

      for (right = nums.length - 1; left < right; right--) {
        if (nums[first] + nums[left] + nums[right] === 0) {
          res.push([nums[first], nums[left], nums[right]])
          break
        }
      }
    }
  }
  return res
};

function test_data() {
  let nums1: number[] = [-1, 0, 1, 2, -1, -4]
  console.log(threeSum(nums1));

  let nums2: number[] = [-1, 0, 1, 2, -1, 4]
  console.log(threeSum(nums2));

  let nums3: number[] = [0]
  console.log(threeSum(nums3));

  let nums4: number[] = [0, 0, 0, 0]
  console.log(threeSum(nums4));
}

test_data()
