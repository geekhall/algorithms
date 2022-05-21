/**
 * ID:    00119
 * Title: Pascal's Triangle II
 * Difficulty: Easy
 * Description: Given an integer rowIndex, return the rowIndex th (0-indexed) row of the Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * Example 1:
 *
 * Input: rowIndex = 3 Output: [1,3,3,1]
 *
 * Example 2:
 *
 * Input: rowIndex = 0 Output: [1]
 *
 * Example 3:
 *
 * Input: rowIndex = 1 Output: [1,1]
 *
 * Constraints:
 *
 * 0 <= rowIndex <= 33
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
 */

function getRow(rowIndex: number): number[] {
  if (rowIndex === 0)
    return [1]

  let res = new Array()
  let lastRow = getRow(rowIndex - 1)
  res[0] = 1
  res[rowIndex] = 1
  for (let i = 1; i < rowIndex; i++) {
    res[i] = lastRow[i - 1] + lastRow[i]
  }
  return res
};

function test_00119() {
  console.log(getRow(4));

}

test_00119()
