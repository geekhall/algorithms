/**
 * ID:    00001
 * Title: Two Sum
 * Difficulty: Easy
 * Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6 Output: [1,2]
 *
 * Example 3:
 *
 * Input: nums = [3,3], target = 6 Output: [0,1]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10 4
 * -10 9 <= nums[i] <= 10 9
 * -10 9 <= target <= 10 9
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n 2) time complexity?
 */
interface HashMap<T> {
  [key: string]: T
}

function twoSum(nums: number[], target: number): number[] {
  let hashmap: HashMap<number> = {}
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (typeof hashmap[another] !== undefined) {
      return [i, hashmap[another]]
    }
    hashmap[nums[i]] = i
  }
  return []
}

function twoSum1(nums: number[], target: number): number[] {
  let m = new Map
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (m.has(another)) {
      return [m.get(another), i]
    }
    m.set(nums[i], i)
  }
  return []
};
function test_00001() {
  let testdata: number[] = [2, 7, 11, 13]
  let target: number = 9
  console.log(twoSum1(testdata, target));
}

test_00001()

// Usage of hashmap
// let hashmap: HashMap<number> = {}
// hashmap['1'] = 10
// hashmap['2'] = 22
// console.log(hashmap);
// console.log(hashmap['1']); // 10
// console.log(hashmap['3']); // undefined
// console.log(typeof hashmap['3']);  // undefined
