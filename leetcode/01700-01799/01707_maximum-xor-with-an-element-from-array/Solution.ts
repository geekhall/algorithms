/**
 * ID:    01707
 * Title: Maximum XOR With an Element From Array
 * Difficulty: Hard
 * Description: You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [x i, m i ].
 * 
 * The answer to the i th query is the maximum bitwise XOR value of x i and any element of nums that does not exceed m i. In other words, the answer is max(nums[j] XOR x i) for all j such that nums[j] <= m i. If all elements in nums are larger than m i, then the answer is -1.
 * 
 * Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the i th query.
 * 
 * Example 1:
 * 
 * Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]] Output: [3,3,7] Explanation: 1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3. 2) 1 XOR 2 = 3. 3) 5 XOR 2 = 7.
 * 
 * Example 2:
 * 
 * Input: nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]] Output: [15,-1,5]
 * 
 * Constraints:
 * 
 * 1 <= nums.length, queries.length <= 10 5
 * queries[i].length == 2
 * 0 <= nums[j], x i, m i <= 10 9
 */
function solution() {
  
}

function test_01707() {
  
}

test_01707()
