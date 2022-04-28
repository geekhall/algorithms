// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numIdenticalPairs(nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j])
        res++
    }
  }
  return res
};

function test_01512() {
  // Input: nums = [1,2,3,1,1,3]
  // Output: 4
  // Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  let nums1 = [1, 2, 3, 1, 1, 3]
  console.log(numIdenticalPairs(nums1));

  // Input: nums = [1,1,1,1]
  // Output: 6
  // Explanation: Each pair in the array are good.
  let nums2: number[] = [1, 1, 1, 1]
  console.log(numIdenticalPairs(nums2));

  // Input: nums = [1,2,3]
  // Output: 0
  let nums3: number[] = [1, 2, 3]
  console.log(numIdenticalPairs(nums3));
}

test_01512()
