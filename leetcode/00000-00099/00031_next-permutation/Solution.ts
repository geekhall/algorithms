/**
 * ID:    00031
 * Title: Next Permutation
 * Difficulty: Medium
 * Description: A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 *
 * For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
 *
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
 *
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
 *
 * Given an array of integers nums, find the next permutation of nums.
 *
 * The replacement must be in place and use only constant extra memory.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3] Output: [1,3,2]
 *
 * Example 2:
 *
 * Input: nums = [3,2,1] Output: [1,2,3]
 *
 * Example 3:
 *
 * Input: nums = [1,1,5] Output: [1,5,1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 */
function nextPermutation(nums: number[]): void {
  let idx = nums.length - 2;
  // find the first number that is smaller than the next one from the end
  // 从右向左找到第一个比下一个数小的数的下标idx
  // 比如： [1, 2, 3, 4, 3, 2, 1]则返回 idx = 2，
  //              ↑
  while (idx >= 0 && nums[idx] >= nums[idx + 1]) idx--;
  if (idx < 0) { // 如果没有找到（每个数都比下一个数小），说明是最大的排列，需要反转
    nums.reverse()
    return;
  }
  // find the first number that is larger than the idx number
  // 从右向左找到第一个比idx数大的数的下标 i
  // 比如： [1, 2, 3, 4, 3, 2, 1] idx = 2，则返回 i = 3
  //                 ↑
  let i = nums.length - 1
  while (nums[i] <= nums[idx])
    i--;
  // swap arr[i] and arr[idx]
  // 比如： [1, 2, 3, 4, 3, 2, 1] => [1, 2, 4, 3, 3, 2, 1]
  let tmp = nums[i];
  nums[i] = nums[idx];
  nums[idx] = tmp;
  // reverse the rest of the array
  // 比如：
  // [1, 2, 4, 3, 3, 2, 1]
  //         ↓
  // [1, 2, 4, 1, 3, 2, 3]
  //         ↓
  // [1, 2, 4, 1, 2, 3, 3]
  console.log("#1 : ", nums, idx, i)
  let left = idx + 1, right = nums.length - 1;
  while (left < right) {
    tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
    left++;
    right--;
  }
};

function test_00031() {
  let nums = [1, 2, 3]
  nextPermutation(nums)
  console.log(nums)
  nums = [3, 2, 1]
  nextPermutation(nums)
  console.log(nums)
  nums = [1, 1, 5]
  nextPermutation(nums)
  console.log(nums)
  nums = [1, 2, 3, 4, 3, 2, 1]
  nextPermutation(nums)
  console.log(nums)
  nums = [2, 3, 1, 3, 3]
  nextPermutation(nums) // [2, 3, 3, 1, 3]
  console.log(nums)

}

test_00031()
