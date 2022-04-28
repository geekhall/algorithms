// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.
function findDisappearedNumbers(nums: number[]): number[] {
  let full = new Set(Array.from({ length: nums.length }, (_, k) => k + 1))
  let s = new Set()
  nums.forEach((v, i) => {
    s.add(v)
  });
  return Array.from(full).filter(x => !s.has(x))
};

function test_00448() {
  // Input: nums = [4,3,2,7,8,2,3,1]
  // Output: [5,6]
  let nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
  console.log(findDisappearedNumbers(nums1));

  // Input: nums = [1,1]
  // Output: [2]
  let nums2 = [1, 1]
  console.log(findDisappearedNumbers(nums2));

}
test_00448()
