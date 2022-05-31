/**
 * ID:    01779
 * Title: Find Nearest Point That Has the Same X or Y Coordinate
 * Difficulty: Easy
 * Description: You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [a i, b i ] represents that a point exists at (a i, b i). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 *
 * Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.
 *
 * The Manhattan distance between two points (x 1, y 1) and (x 2, y 2) is abs(x 1 - x 2) + abs(y 1 - y 2).
 *
 * Example 1:
 *
 * Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]] Output: 2 Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
 *
 * Example 2:
 *
 * Input: x = 3, y = 4, points = [[3,4]] Output: 0 Explanation: The answer is allowed to be on the same location as your current location.
 *
 * Example 3:
 *
 * Input: x = 3, y = 4, points = [[2,3]] Output: -1 Explanation: There are no valid points.
 *
 * Constraints:
 *
 * 1 <= points.length <= 10 4
 * points[i].length == 2
 * 1 <= x, y, a i, b i <= 10 4
 */
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let valid = new Array()
  for (let i = 0; i < points.length; i++) {
    let point = points[i]
    if (point[0] === x || point[1] === y) {
      valid.push(i)
    }
  }
  if (valid.length === 0) {
    return -1
  }
  let min = Number.MAX_SAFE_INTEGER
  let minIndex = -1
  for (let i = 0; i < valid.length; i++) {
    let point = points[valid[i]]
    let distance = Math.abs(x - point[0]) + Math.abs(y - point[1])
    if (distance < min) {
      min = distance
      minIndex = valid[i]
    }
  }
  return minIndex
};

function test_01779() {
  let x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]
  console.log(nearestValidPoint(x, y, points));
  x = 3, y = 4, points = [[3, 4]]
  console.log(nearestValidPoint(x, y, points));
  x = 3, y = 4, points = [[2, 3]]
  console.log(nearestValidPoint(x, y, points));
}

test_01779()
