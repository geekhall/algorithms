/**
 * ID:    00042
 * Title: Trapping Rain Water
 * Difficulty: Hard
 * Description: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] Output: 6 Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Example 2:
 *
 * Input: height = [4,2,0,3,2,5] Output: 9
 *
 * Constraints:
 *
 * n == height.length
 * 1 <= n <= 2 * 10 4
 * 0 <= height[i] <= 10 5
 */
function trap(height: number[]): number {
  let res = 0
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) { //
        leftMax = height[left]
      } else {
        // 若当前左侧current位置的柱子没有左侧最高的柱子高，
        // 则雨水可以留下差额那么多（例如左侧i=2位置）
        res += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        // 若当前右侧current位置的柱子没有右侧最高的柱子高，
        // 则雨水可以留下差额那么多（例如右侧i=9位置）
        res += rightMax - height[right]
      }
      right--
    }
  }
  return res
};

function test_00042() {
  let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  console.log(trap(height))
  height = [4, 2, 0, 3, 2, 5]
  console.log(trap(height))
}

test_00042()
