/**
 * ID:    00697
 * Title: Degree of an Array
 * Difficulty: Easy
 * Description: Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
 *
 * Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
 *
 * Example 1:
 *
 * Input: nums = [1,2,2,3,1] Output: 2 Explanation: The input array has a degree of 2 because both elements 1 and 2 appear twice. Of the subarrays that have the same degree: [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2] The shortest length is 2. So return 2.
 *
 * Example 2:
 *
 * Input: nums = [1,2,2,3,1,4,2] Output: 6 Explanation: The degree is 3 because the element 2 is repeated 3 times. So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 *
 * Constraints:
 *
 * nums.length will be between 1 and 50,000.
 * nums[i] will be an integer between 0 and 49,999.
 */
function findShortestSubArray(nums: number[]): number {

  interface ReturnType {
    cnt: number
    minPos: number
    maxPos: number
  }
  let maxVal = 0
  let maxKey = nums[0]
  let m = new Map<number, ReturnType>()

  for (let i = 0; i < nums.length; i++) {
    if (m.get(nums[i]) === undefined) {
      m.set(nums[i], { cnt: 1, minPos: i, maxPos: i })
      if (maxVal < 1) {
        maxVal = 1
        maxKey = nums[i]
      }
    } else {
      let cur = m.get(nums[i])!
      let cnt = cur.cnt + 1
      m.set(nums[i], { cnt: cnt, minPos: cur.minPos, maxPos: i })
      if (maxVal < cnt) {
        maxVal = cnt
        maxKey = nums[i]
      }
    }
  }
  // let maxPair: [number, number] = new Array([...m.entries()].sort((a, b) => b[1] - a[1]))[0][0]
  let minLen = Number.MAX_SAFE_INTEGER
  m.forEach((v, k) => {
    if (v.cnt === maxVal && minLen > v.maxPos - v.minPos + 1) {
      minLen = v.maxPos - v.minPos + 1
    }
  })
  return minLen
};

function test_00697() {
  let nums = [1, 2, 2, 3, 1, 4, 2]
  console.log(findShortestSubArray(nums));
  nums = [1, 2, 2, 3, 1]
  console.log(findShortestSubArray(nums));

}

test_00697()
