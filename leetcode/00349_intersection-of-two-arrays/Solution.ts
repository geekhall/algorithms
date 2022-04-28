// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.

function intersection(nums1: number[], nums2: number[]): number[] {
  let s2 = new Set(nums2)
  return Array.from(new Set(nums1.filter((v, i) => s2.has(v))))
};

function test_00349() {
  // Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2]
  let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
  console.log(intersection(nums1, nums2));

  // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  // Output: [9,4]
  // Explanation: [4,9] is also accepted.
  nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
  console.log(intersection(nums1, nums2));
}
test_00349()
