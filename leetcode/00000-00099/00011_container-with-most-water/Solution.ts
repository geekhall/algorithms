/**
 * ID:    00011
 * Title: Container With Most Water
 * Difficulty: Medium
 * Description: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i th line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Example 1:
 *
 * Input: height = [1,8,6,2,5,4,8,3,7] Output: 49 Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 *
 * Input: height = [1,1] Output: 1
 *
 * Constraints:
 *
 * n == height.length
 * 2 <= n <= 10 5
 * 0 <= height[i] <= 10 4
 */
function maxArea(height: number[]): number {
  let max_area = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    max_area = Math.max(max_area, Math.min(height[left], height[right]) * (right - left))
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max_area
};

function test_00011() {
  let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  console.log(maxArea(height));
  height = [1, 1]
  console.log(maxArea(height));

}

test_00011()
