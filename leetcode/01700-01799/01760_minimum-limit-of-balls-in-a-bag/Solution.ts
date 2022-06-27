/**
 * ID:    01760
 * Title: Minimum Limit of Balls in a Bag
 * Difficulty: Medium
 * Description: You are given an integer array nums where the i th bag contains nums[i] balls. You are also given an integer maxOperations.
 *
 * You can perform the following operation at most maxOperations times:
 *
 * Take any bag of balls and divide it into two new bags with a positive number of balls.
 *
 * For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
 *
 * Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.
 *
 * Return the minimum possible penalty after performing the operations.
 *
 * Example 1:
 *
 * Input: nums = [9], maxOperations = 2 Output: 3 Explanation: - Divide the bag with 9 balls into two bags of sizes 6 and 3. [ 9 ] -> [6,3]. - Divide the bag with 6 balls into two bags of sizes 3 and 3. [ 6,3] -> [3,3,3]. The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.
 *
 * Example 2:
 *
 * Input: nums = [2,4,8,2], maxOperations = 4 Output: 2 Explanation: - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4, 8,2] -> [2,4,4,4,2]. - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2, 4,4,4,2] -> [2,2,2,4,4,2]. - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2, 4,4,2] -> [2,2,2,2,2,4,2]. - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2, 4,2] -> [2,2,2,2,2,2,2,2]. The bag with the most number of balls has 2 balls, so your penalty is 2 an you should return 2.
 *
 * Example 3:
 *
 * Input: nums = [7,17], maxOperations = 2 Output: 7
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 5
 * 1 <= maxOperations, nums[i] <= 10 9
 */
function minimumSize(nums: number[], maxOperations: number): number {
  // minimum value
  let left = 1
  // maximum value of nums
  let right = nums.reduce((a, b) => Math.max(a, b), -Infinity);
  let minPenalty = right;
  const isPossible = (nums: number[], maxOperations: number, penalty: number): boolean => {
    let requiredOps = 0;
    for (let n of nums)
      requiredOps += Math.floor((n - 1) / penalty);
    return requiredOps <= maxOperations;
  }
  // binary search to find the minimum possible penalty
  while (left <= right) {
    let penalty = left + Math.floor((right - left) / 2);
    if (isPossible(nums, maxOperations, penalty)) {
      minPenalty = Math.min(minPenalty, penalty);
      right = penalty - 1;
    } else {
      left = penalty + 1;
    }
  }
  return minPenalty;
}

function minimumSize1(nums: number[], maxOperations: number): number {
  let left = 1, right = nums.reduce((a, b) => Math.max(a, b), -Infinity);
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let count = 0;
    for (let n of nums)
      count += Math.floor((n - 1) / mid);
    if (count > maxOperations)
      left = mid + 1;
    else
      right = mid;
  }
  return left;
};

function test_01760() {
  let nums = [9], maxOperations = 2
  console.log(minimumSize(nums, maxOperations));
  nums = [2, 4, 8, 2], maxOperations = 4
  console.log(minimumSize(nums, maxOperations));
  nums = [7, 17], maxOperations = 2
  console.log(minimumSize(nums, maxOperations));
}

test_01760()
