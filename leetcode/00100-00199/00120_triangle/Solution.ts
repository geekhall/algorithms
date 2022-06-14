/**
 * ID:    00120
 * Title: Triangle
 * Difficulty: Medium
 * Description: Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 *
 * Example 1:
 *
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]] Output: 11 Explanation: The triangle looks like: 2 3 4 6 5 7 4 1 8 3 The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 *
 * Example 2:
 *
 * Input: triangle = [[-10]] Output: -10
 *
 * Constraints:
 *
 * 1 <= triangle.length <= 200
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10 4 <= triangle[i][j] <= 10 4
 *
 * Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
 */
function minimumTotal(triangle: number[][]): number {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
};

function test_00120() {
  let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
  console.log(minimumTotal(triangle))
  triangle = [[-10]]
  console.log(minimumTotal(triangle))
  triangle = [[1], [2, 3]]
  console.log(minimumTotal(triangle))
};


test_00120()
