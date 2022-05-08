/**
 * ID:    01499
 * Title: Max Value of Equation
 * Difficulty: Hard
 * Description: You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [x i, y i ] such that x i < x j for all 1 <= i < j <= points.length. You are also given an integer k.
 * 
 * Return the maximum value of the equation y i + y j + |x i - x j | where |x i - x j | <= k and 1 <= i < j <= points.length.
 * 
 * It is guaranteed that there exists at least one pair of points that satisfy the constraint |x i - x j | <= k.
 * 
 * Example 1:
 * 
 * Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1 Output: 4 Explanation: The first two points satisfy the condition |x i - x j | <= 1 and if we calculate the equation we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1. No other pairs satisfy the condition, so we return the max of 4 and 1.
 * 
 * Example 2:
 * 
 * Input: points = [[0,0],[3,0],[9,2]], k = 3 Output: 3 Explanation: Only the first two points have an absolute difference of 3 or less in the x-values, and give the value of 0 + 0 + |0 - 3| = 3.
 * 
 * Constraints:
 * 
 * 2 <= points.length <= 10 5
 * points[i].length == 2
 * -10 8 <= x i, y i <= 10 8
 * 0 <= k <= 2 * 10 8
 * x i < x j for all 1 <= i < j <= points.length
 * x i form a strictly increasing sequence.
 */
function solution() {
  
}

function test_01499() {
  
}

test_01499()
