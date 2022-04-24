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
  let res: number[][] = []
  let sumArr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sumArr.push()
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
