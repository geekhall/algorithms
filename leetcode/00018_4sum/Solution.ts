/**
 *
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *
 *   0 <= a, b, c, d < n
 *   a, b, c, and d are distinct.
 *   nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * You may return the answer in any order.
 * @param nums
 * @param target
 * @return
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort()
  let n = nums.length
  let res: number[][] = []
  for (let first = 0; first < n; first++) {
    // unique first element.
    if (first > 0 && nums[first] === nums[first - 1])
      continue

    let target_three = target - nums[first]
    for (let second = first + 1; second < n; second++) {
      // unique second element.
      if (second > first + 1 && nums[second] === nums[second - 1])
        continue

      let target_two = target_three - nums[second]

      for (let third = second + 1; third < n; third++) {
        if (third > second + 1 && nums[third] === nums[third - 1])
          continue
        let right = n - 1
        while (third < right) {
          if (nums[third] + nums[right] === target_two) {
            res.push([nums[first], nums[second], nums[third], nums[right]]);
            break
          }
          right--
        }
      }
    }
  }
  return res
};


function test_00018() {
  // Input: nums = [1,0,-1,0,-2,2], target = 0
  // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
  let arr: number[] = [1, 0, -1, 0, -2, 2]
  console.log(fourSum(arr, 0));

  // Input: nums = [2, 2, 2, 2, 2], target = 8
  // Output: [[2, 2, 2, 2]]
  let arr1: number[] = [2, 2, 2, 2, 2]
  console.log(fourSum(arr1, 8));
}

test_00018()
