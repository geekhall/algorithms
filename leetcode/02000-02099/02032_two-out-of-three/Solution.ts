/**
 * ID:    02032
 * Title: Two Out of Three
 * Difficulty: Easy
 * Description: Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 *
 * Example 1:
 *
 * Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3] Output: [3,2] Explanation: The values that are present in at least two arrays are: - 3, in all three arrays. - 2, in nums1 and nums2.
 *
 * Example 2:
 *
 * Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2] Output: [2,3,1] Explanation: The values that are present in at least two arrays are: - 2, in nums2 and nums3. - 3, in nums1 and nums2. - 1, in nums1 and nums3.
 *
 * Example 3:
 *
 * Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5] Output: [] Explanation: No value is present in at least two arrays.
 *
 * Constraints:
 *
 * 1 <= nums1.length, nums2.length, nums3.length <= 100
 * 1 <= nums1[i], nums2[j], nums3[k] <= 100
 */
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  return [...new Set(nums1.filter(num => nums2.includes(num) || nums3.includes(num))
    .concat(nums2.filter(num => nums3.includes(num))))]
};

function test_02032() {
  let nums1 = [1, 1, 3, 2], nums2 = [2, 3], nums3 = [3]
  console.log(twoOutOfThree(nums1, nums2, nums3))
  nums1 = [3, 1], nums2 = [2, 3], nums3 = [1, 2]
  console.log(twoOutOfThree(nums1, nums2, nums3))
  nums1 = [1, 2, 2], nums2 = [4, 3, 3], nums3 = [5]
  console.log(twoOutOfThree(nums1, nums2, nums3))

}

test_02032()
