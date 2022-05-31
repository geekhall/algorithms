/**
 * ID:    01037
 * Title: Valid Boomerang
 * Difficulty: Easy
 * Description: Given an array points where points[i] = [x i, y i ] represents a point on the X-Y plane, return true if these points are a boomerang.
 *
 * A boomerang is a set of three points that are all distinct and not in a straight line.
 *
 * Example 1:
 *
 * Input: points = [[1,1],[2,3],[3,2]] Output: true
 *
 * Example 2:
 *
 * Input: points = [[1,1],[2,2],[3,3]] Output: false
 *
 * Constraints:
 *
 * points.length == 3
 * points[i].length == 2
 * 0 <= x i, y i <= 100
 */

function isBoomerang(points: number[][]): boolean {
  let x1 = points[0][0]
  let y1 = points[0][1]
  let x2 = points[1][0]
  let y2 = points[1][1]
  let x3 = points[2][0]
  let y3 = points[2][1]
  if (x1 === x2 && y1 === y2) {
    return false
  }
  if (x1 === x3 && y1 === y3) {
    return false
  }
  if (x2 === x3 && y2 === y3) {
    return false
  }
  return (x1 - x2) * (y3 - y2) - (x3 - x2) * (y1 - y2) !== 0
};

function test_01037() {
  let points = [[1, 1], [2, 3], [3, 2]]
  console.log(isBoomerang(points));
  points = [[1, 1], [2, 2], [3, 3]]
  console.log(isBoomerang(points));
  points = [[0, 0], [0, 2], [2, 1]]
  console.log(isBoomerang(points));
}

test_01037()
