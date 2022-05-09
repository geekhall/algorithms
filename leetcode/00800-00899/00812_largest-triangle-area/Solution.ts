/**
 * ID:    00812
 * Title: Largest Triangle Area
 * Difficulty: Easy
 * Description: Given an array of points on the X-Y plane points where points[i] = [x i, y i ], return the area of the largest triangle that can be formed by any three different points. Answers within 10 -5 of the actual answer will be accepted.
 *
 * Example 1:
 *
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]] Output: 2.00000 Explanation: The five points are shown in the above figure. The red triangle is the largest.
 *
 * Example 2:
 *
 * Input: points = [[1,0],[0,0],[0,1]] Output: 0.50000
 *
 * Constraints:
 *
 * 3 <= points.length <= 50
 * -50 <= x i, y i <= 50
 * All the given points are unique.
 */
function largestTriangleArea(points: number[][]): number {
  let max = 0
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let x1 = points[i][0]
        let y1 = points[i][1]
        let x2 = points[j][0]
        let y2 = points[j][1]
        let x3 = points[k][0]
        let y3 = points[k][1]
        max = Math.max(max, 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)))
      }
    }
  }
  return max
};
// Heron's Formula:
// Area = 0.5 * pow(p(p-a)(p-b)(p-c),0.5)
// wrong, will return NaN?
function largestTriangleArea2(points: number[][]): number {
  let res = 0
  let max = 0
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        max = Math.max(max, area(points[i], points[j], points[k]))
      }
    }
  }
  return max
}
// Heron's Formula:
// Area = 0.5 * Math.pow(p * (p - a) * (p - b) * (p - c), 0.5)
function area(p1: number[], p2: number[], p3: number[]): number {
  let x1 = p1[0]
  let y1 = p1[1]
  let x2 = p2[0]
  let y2 = p2[1]
  let x3 = p3[0]
  let y3 = p3[1]
  let a = Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 0.5)
  let b = Math.pow(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2), 0.5)
  let c = Math.pow(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2), 0.5)
  let p = 0.5 * (a + b + c)

  return Math.pow(p * (p - a) * (p - b) * (p - c), 0.5)
}

function test_00812() {
  let points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]
  console.log(largestTriangleArea(points));
  points = [[1, 0], [0, 0], [0, 1]]
  console.log(largestTriangleArea(points));

  points = [[4, 6], [6, 5], [3, 1]]
  console.log(largestTriangleArea(points)); // 5.5

  points = [[-35, 19], [40, 19], [27, -20], [35, -3], [44, 20], [22, -21], [35, 33], [-19, 42], [11, 47], [11, 37]]
  console.log(largestTriangleArea(points)); // 1799.00


}

test_00812()
