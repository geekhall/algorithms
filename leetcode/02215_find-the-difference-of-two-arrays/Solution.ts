// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.


function findDifference(nums1: number[], nums2: number[]): number[][] {
  let res: number[][] = []
  let s1 = new Set(nums1)
  let s2 = new Set(nums2)
  res[0] = [...new Set(nums1.filter((v, _) => !s2.has(v)))]
  res[1] = [...new Set(nums2.filter((v, _) => !s1.has(v)))]

  return res
};

function test_02215() {
  // Input: nums1 = [1,2,3], nums2 = [2,4,6]
  // Output: [[1,3],[4,6]]
  // Explanation:
  // For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
  // For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
  let nums1 = [1, 2, 3], nums2 = [2, 4, 6]
  console.log(findDifference(nums1, nums2));

  // Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
  // Output: [[3],[]]
  // Explanation:
  // For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
  // Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

  nums1 = [1, 2, 3, 3], nums2 = [1, 1, 2, 2]
  console.log(findDifference(nums1, nums2));
}
test_02215()