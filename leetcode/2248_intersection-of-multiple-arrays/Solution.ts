// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers,
// return the list of integers that are present in each array of nums sorted in ascending order.

function intersection(nums: number[][]): number[] {
  if (nums.length === 1)
    return nums[0].sort((a, b) => a - b)
  return nums.reduce((pre, cur, currentIndex) => {
    return intersectionArray(pre, cur).sort((a, b) => a - b)
  })

};

function intersectionArray(nums1: number[], nums2: number[]): number[] {
  let s2 = new Set(nums2)
  return [...new Set(nums1.filter((v, _) => s2.has(v)))]
}

function test_02248() {
  // Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
  // Output: [3,4]
  // Explanation:
  // The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
  let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]
  console.log(intersection(nums));

  // Input: nums = [[1,2,3],[4,5,6]]
  // Output: []
  // Explanation:
  // There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
  nums = [[1, 2, 3], [4, 5, 6]]
  console.log(intersection(nums));

  console.log(intersection([[7, 34, 45, 10, 12, 27, 13], [27, 21, 45, 10, 12, 13]]));
  console.log(intersection([[44, 21, 48]]));

}
test_02248()
