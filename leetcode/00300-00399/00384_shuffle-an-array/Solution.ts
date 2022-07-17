/**
 * ID:    00384
 * Title: Shuffle an Array
 * Difficulty: Medium
 * Description: Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
 *
 * Implement the Solution class:
 *
 * Solution(int[] nums) Initializes the object with the integer array nums.
 * int[] reset() Resets the array to its original configuration and returns it.
 * int[] shuffle() Returns a random shuffling of the array.
 *
 * Example 1:
 *
 * Input ["Solution", "shuffle", "reset", "shuffle"] [[[1, 2, 3]], [], [], []] Output [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]] Explanation Solution solution = new Solution([1, 2, 3]); solution.shuffle(); // Shuffle the array [1,2,3] and return its result. // Any permutation of [1,2,3] must be equally likely to be returned. // Example: return [3, 1, 2] solution.reset(); // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3] solution.shuffle(); // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 50
 * -10 6 <= nums[i] <= 10 6
 * All the elements of nums are unique.
 * At most 10 4 calls in total will be made to reset and shuffle.
 */
class Solution {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    let result = this.nums.slice();
    for (let i = 0; i < result.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }
}

function test_00384() {
  let solution = new Solution([1, 2, 3]);
  let s = solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
  // Any permutation of [1,2,3] must be equally likely to be returned.
  // Example: return [3, 1, 2]
  console.log(s)
  console.log(solution.reset())      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]

  s = solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
  console.log(s)
}

test_00384()
