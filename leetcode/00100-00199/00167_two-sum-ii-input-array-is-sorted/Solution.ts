/**
 * ID:    00167
 * Title: Two Sum II - Input Array Is Sorted
 * Difficulty: Medium
 * Description: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index 1 ] and numbers[index 2 ] where 1 <= index 1 < index 2 <= numbers.length.
 *
 * Return the indices of the two numbers, index 1 and index 2, added by one as an integer array [index 1, index 2 ] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 * Example 1:
 *
 * Input: numbers = [ 2, 7,11,15], target = 9 Output: [1,2] Explanation: The sum of 2 and 7 is 9. Therefore, index 1 = 1, index 2 = 2. We return [1, 2].
 *
 * Example 2:
 *
 * Input: numbers = [ 2,3, 4 ], target = 6 Output: [1,3] Explanation: The sum of 2 and 4 is 6. Therefore index 1 = 1, index 2 = 3. We return [1, 3].
 *
 * Example 3:
 *
 * Input: numbers = [ -1, 0 ], target = -1 Output: [1,2] Explanation: The sum of -1 and 0 is -1. Therefore index 1 = 1, index 2 = 2. We return [1, 2].
 *
 * Constraints:
 *
 * 2 <= numbers.length <= 3 * 10 4
 * -1000 <= numbers[i] <= 1000
 * numbers is sorted in non-decreasing order.
 * -1000 <= target <= 1000
 * The tests are generated such that there is exactly one solution.
 */
function twoSum(numbers: number[], target: number): number[] {
  for (let left = 0, right = numbers.length - 1; left < right;) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
function test_00167() {
  const numbers = [2, 7, 11, 15], target = 9
  console.log(twoSum(numbers, target))
  const numbers2 = [2, 3, 4], target2 = 6
  console.log(twoSum(numbers2, target2))
  const numbers3 = [-1, 0], target3 = -1
  console.log(twoSum(numbers3, target3))
}

test_00167()
