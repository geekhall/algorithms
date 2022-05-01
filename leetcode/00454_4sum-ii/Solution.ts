/**
 * ID:    00454
 * Title: 4Sum II
 * Difficulty: Medium
 * Description: Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
 *
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 *
 * Example 1:
 *
 * Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2] Output: 2 Explanation: The two tuples are: 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
 *
 * Example 2:
 *
 * Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0] Output: 1
 *
 * Constraints:
 *
 * n == nums1.length
 * n == nums2.length
 * n == nums3.length
 * n == nums4.length
 * 1 <= n <= 200
 * -2 28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2 28
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let n = nums1.length
  let m: Map<number, number> = new Map<number, number>();
  let res = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let v1 = m.get(nums1[i] + nums2[j])
      if (v1)
        m.set(nums1[i] + nums2[j], v1 + 1)
      else
        m.set(nums1[i] + nums2[j], 1)
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let v2 = -(nums3[i] + nums4[j]);
      if (m.has(v2)) {
        res = res + m.get(v2)!
      }
    }
  }

  return res
};


function test_00454() {
  // Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
  // Output: 2
  // Explanation:
  // The two tuples are:
  // 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
  // 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
  let nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2]
  console.log(fourSumCount(nums1, nums2, nums3, nums4));

  // Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
  // Output: 1
  nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
  console.log(fourSumCount(nums1, nums2, nums3, nums4));

  let nums11 = [0, 1, -1], nums22 = [-1, 1, 0], nums33 = [0, 0, 1], nums44 = [-1, 1, 1]
  console.log(fourSumCount(nums11, nums22, nums33, nums44));

  nums1 = [-73, -96, 86, -25, 98, -19, -9, 28, -81, 45, 24, 10, -90, 42, 7, 37, 52, -8, -35, 98, 63, -85, 83, 5, -87, 52, 7, 55, -5, -75, -85, -30, 75, 10, 34, 14, -96, -69, -21, -88, 74, -9, -43, -40, -52, 21, 86, -58, -21, -84, 73, 79, -78, 15, -92, -76, 36, -43, -51, 93, -68, -29, -26, 77, 99, -99, 30, -56, 68, -76, 87, 32, -58, 8, -22, 90, -87, -94, 3, -48, 69, -32, -51, -69, 2, 58, 79, -86, -60, 55, 100, 14, 100, -29, 76, -27, 18, -5, -14, 90, -92, 0, -99, -33, 78, 33, -34, -97, 85, 81, 34, 58, 17, 7, 90, 2, 37, -58, 31, -83, 54, -23, 78, 21, -30, -92, 42, 23, 5, -46, -12, -7, -23, -90, 77, -8, -39, -20, -80, -16, 66, 33, -93, -49, 44, -93, -25, 3, -42, -97, 23, 13, -99, 75, 66]
  nums2 = [70, -22, 15, -67, 28, 30, -40, 11, 41, -46, -33, -33, -55, 45, 82, 79, 73, 9, 28, -23, -63, 28, -51, -81, 74, -83, -77, -80, 5, -14, -96, -64, 2, -47, -50, 67, 16, 10, 23, 46, -15, -13, 97, -97, 4, 5, 51, -23, -20, 38, -8, -40, -70, 11, -54, 81, -9, 6, -48, 42, -95, 3, 32, -99, -32, 52, 97, -33, -23, -75, -67, -90, -40, 33, -11, 9, 68, -80, -70, 45, 63, 61, 95, -22, 19, 82, 9, -90, 38, 45, -64, -3, -25, 55, -39, 97, -29, 8, -82, 95, 29, -66, 30, -97, 57, -5, 64, 43, -37, 70, -58, 68, -11, 88, 75, -96, -49, 98, 42, 81, 3, -52, 45, -98, -47, 6, 37, 12, 75, 99, 40, -80, -17, 15, -32, 89, 59, 42, -48, -51, -21, 98, 4, 69, -81, 37, 16, -86, 86, -84, -12, 64, -7, -93, 10]
  nums3 = [-23, 55, -28, -8, 53, -50, -98, 66, -17, 4, 76, -20, 97, 83, 81, 86, 45, 65, 42, 50, -53, 32, -26, 43, 56, -71, 8, -91, -84, 95, 25, -75, 61, 100, 5, -56, 14, 24, 81, -15, -29, -76, -60, -32, -70, 53, -36, 78, -33, -98, -77, -24, 73, 56, 9, 42, -76, -49, 62, 100, 50, 95, -6, 93, -59, 1, -33, -44, 80, 11, 56, 79, -91, -56, 46, -38, 63, -14, 6, 38, -12, 98, 56, 32, -27, 3, 5, 23, -18, 58, -58, -42, 36, -70, -49, 14, 82, 56, -30, -94, 22, -73, -69, -67, -83, 37, -65, -6, -23, -38, 89, 9, -56, -54, 6, -94, -93, 95, 8, 92, 46, 60, 83, -22, 9, 16, 89, -20, -36, -47, 10, -68, 60, 29, -38, 17, -50, 60, -67, -81, 88, 0, -93, -29, 51, -36, -11, 10, -7, -1, -10, -52, 24, -17, -100]
  nums4 = [93, 16, -59, -4, -93, -98, -30, 45, 51, -95, -80, -24, -17, -15, -11, 50, -10, 19, -60, 87, -18, -23, -52, -76, -94, -34, -61, 24, 34, 69, -62, -86, -67, 90, 60, -68, 40, -49, -2, -87, 82, 70, 82, 75, 60, 39, 39, -14, 30, -41, 37, -28, -8, -48, 91, 3, 32, -28, -96, -42, -6, 86, -28, -20, 8, -9, -81, -24, 55, -74, -34, 20, -31, -25, 33, 50, -13, 54, 29, -98, -4, -45, 49, -45, -40, -63, -88, 65, -67, -12, -52, 89, -18, 33, 86, -52, 100, -23, -98, -29, -74, -65, -62, 74, -9, -69, -79, 66, -71, 32, -90, -63, 31, 36, 57, -67, -81, -47, -34, -56, 15, 45, -50, -17, -40, 69, 13, 99, -3, -77, -74, 25, 14, 39, -10, 90, 52, 15, -1, 75, -100, -16, -40, 23, -13, 28, -74, -89, -32, -23, 53, -4, -55, -32, -31]
  console.log(fourSumCount(nums1, nums2, nums3, nums4)); //1937207

}

test_00454()

