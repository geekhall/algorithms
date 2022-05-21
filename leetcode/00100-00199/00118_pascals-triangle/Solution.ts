/**
 * ID:    00118
 * Title: Pascal's Triangle
 * Difficulty: Easy
 * Description: Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * Example 1:
 *
 * Input: numRows = 5 Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 * Example 2:
 *
 * Input: numRows = 1 Output: [[1]]
 *
 * Constraints:
 *
 * 1 <= numRows <= 30
 */
function generate(numRows: number): number[][] {

  if (numRows === 1)
    return [[1]]
  let res: number[][] = new Array(numRows)
  let lastTriangle = Array.from(generate(numRows - 1))
  let lastLevel = lastTriangle[lastTriangle.length - 1]
  let thisLevel: number[] = new Array()
  thisLevel[0] = 1
  thisLevel[numRows - 1] = 1
  for (let i = 1; i < numRows - 1; i++) {
    thisLevel[i] = lastLevel[i - 1] + lastLevel[i]
  }

  res = Array.from(lastTriangle)
  res.push(thisLevel)
  return res
};

function test_00118() {
  console.log(generate(5));

}

test_00118()
