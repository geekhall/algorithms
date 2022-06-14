/**
 * ID:    00496
 * Title: Next Greater Element I
 * Difficulty: Easy
 * Description: The next greater element of some element x in an array
 * is the first greater element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2,
 * where nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length, find the index j such that
 * nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
 * If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that
 * ans[i] is the next greater element as described above.
 *
 * Example 1:
 *
 * Input: nums1 = [4,1,2], nums2 = [1, 3, 4, 2] Output: [-1, 3, -1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 *  - 4 is underlined in nums2 = [1, 3, 4, 2]. There is no next greater element, so the answer is -1.
 *  - 1 is underlined in nums2 = [1, 3, 4, 2]. The next greater element is 3.
 *  - 2 is underlined in nums2 = [1, 3, 4, 2]. There is no next greater element, so the answer is -1.
 *
 * Example 2:
 *
 * Input: nums1 = [2,4], nums2 = [1,2,3,4] Output: [3,-1] Explanation: The next greater element for each value of nums1 is as follows: - 2 is underlined in nums2 = [1, 2,3,4]. The next greater element is 3. - 4 is underlined in nums2 = [1,2,3, 4 ]. There is no next greater element, so the answer is -1.
 *
 * Constraints:
 *
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 10 4
 * All integers in nums1 and nums2 are unique.
 * All the integers of nums1 also appear in nums2.
 *
 * Follow up: Could you find an O(nums1.length + nums2.length) solution?
 */
// BF
function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
  let res: number[] = new Array(nums1.length).fill(-1)
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res[i] = nums2[j]
        break
      }
    }
  }
  return res
};

function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    const idxNum = nums2.indexOf(nums1[i])
    res.push((nums2.slice(idxNum + 1).find(val => val > nums2[idxNum])) || -1)
  }
  return res
}

// monotonic stack
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // let ans: number[] = new Array<number>(nums2.length).fill(-1)
  let stack: number[] = new Array<number>()
  let map = new Map()
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      let cur = stack.pop()!
      map.set(nums2[cur], nums2[i])
      // ans[cur] = nums2[i]
    }
    stack.push(i)
  }

  return nums1.map((v, i) => v = map.get(v) === undefined ? -1 : map.get(v))
}

function test_00496() {
  let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
  console.log(nextGreaterElement(nums1, nums2));
  // console.log(nextGreaterElement1(nums1, nums2));
  // console.log(nextGreaterElement2(nums1, nums2));
  nums1 = [1, 3, 5, 2, 4], nums2 = [5, 4, 3, 2, 1]
  console.log(nextGreaterElement(nums1, nums2));
}

test_00496()
