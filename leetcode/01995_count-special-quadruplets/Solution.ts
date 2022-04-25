/**
 * Given a 0-indexed integer array nums,
 * return the number of distinct quadruplets (a, b, c, d) such that:
 *
 *  nums[a] + nums[b] + nums[c] == nums[d], and
 *  a < b < c < d
 *
 * @param numbers
 * @param target
 * @return
 */
function countQuadruplets(nums: number[]): number {
  // nums.sort((n1, n2) => n1 - n2) // can not sort because 'a < b < c < d' is required.
  let res: number = 0
  let n = nums.length;
  if (n < 4)
    return 0

  for (let first = 0; first < n - 3; first++) {
    for (let second = first + 1; second < n - 2; second++) {
      for (let third = second + 1; third < n - 1; third++) {
        let right = n - 1
        while (third < right) {
          if (nums[first] + nums[second] + nums[third] === nums[right]) {
            console.log(nums[first], nums[second], nums[third], nums[right]);
            res++
          }
          right--
        }
      }
    }
  }
  return res
};


function test_01995() {
  // Input: nums = [1,2,3,6]
  // Output: 1
  // Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
  let arr: number[] = [1, 2, 3, 6]
  console.log(countQuadruplets(arr));

  // Input: nums = [1,1,1,3,5]
  // Output: 4
  // Explanation: The 4 quadruplets that satisfy the requirement are:
  // - (0, 1, 2, 3): 1 + 1 + 1 == 3
  // - (0, 1, 3, 4): 1 + 1 + 3 == 5
  // - (0, 2, 3, 4): 1 + 1 + 3 == 5
  // - (1, 2, 3, 4): 1 + 1 + 3 == 5
  let arr1: number[] = [1, 1, 1, 3, 5]
  console.log(countQuadruplets(arr1));

  let arr2: number[] = [2, 16, 9, 27, 3, 39]
  console.log(countQuadruplets(arr2));  // expect 2 [2,16,9,27] [9,27,3,39]

  let arr3: number[] = [28, 8, 49, 85, 37, 90, 20, 8]
  console.log(countQuadruplets(arr3));  // expect 1 (28,8,49,85)

}

test_01995()
