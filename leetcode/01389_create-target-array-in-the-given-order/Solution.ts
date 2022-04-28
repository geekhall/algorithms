// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// 1. Initially target array is empty.
// 2. From left to right read nums[i] and index[i],
//    insert at index index[i] the value nums[i] in target array.
// 3. Repeat the previous step until there are no elements to read in nums and index.
//  Return the target array.

// It is guaranteed that the insertion operations will be valid.

function createTargetArray(nums: number[], index: number[]): number[] {
  let arr = new Array<number>()
  for (let i = 0; i < nums.length; i++) {
    arr.splice(index[i], 0, nums[i])
  }
  return arr
};

function test_01389() {
  // Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
  // Output: [0,4,1,3,2]
  // Explanation:
  // nums       index     target
  // 0            0        [0]
  // 1            1        [0,1]
  // 2            2        [0,1,2]
  // 3            2        [0,1,3,2]
  // 4            1        [0,4,1,3,2]
  let nums1 = [0, 1, 2, 3, 4], index1 = [0, 1, 2, 2, 1]
  console.log(createTargetArray(nums1, index1));

  // Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
  // Output: [0,1,2,3,4]
  // Explanation:
  // nums       index     target
  // 1            0        [1]
  // 2            1        [1,2]
  // 3            2        [1,2,3]
  // 4            3        [1,2,3,4]
  // 0            0        [0,1,2,3,4]
  let nums2 = [1, 2, 3, 4, 0], index2 = [0, 1, 2, 3, 0]
  console.log(createTargetArray(nums2, index2));

}

test_01389()

