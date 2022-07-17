/**
 * ID:    00149
 * Title: Max Points on a Line
 * Difficulty: Hard
 * Description: Given an array of points where points[i] = [x i, y i ] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.
 *
 * Example 1:
 *
 * Input: points = [[1,1],[2,2],[3,3]] Output: 3
 *
 * Example 2:
 *
 * Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]] Output: 4
 *
 * Constraints:
 *
 * 1 <= points.length <= 300
 * points[i].length == 2
 * -10 4 <= x i, y i <= 10 4
 * All the points are unique.
 */
function maxPoints(points: number[][]): number {
  if (points.length <= 2) return points.length;
  let maxCount = 2;
  for (let i = 0; i < points.length; i++) {
    let [x1, y1] = points[i];
    points[i] = [];
    for (let j = i + 1; j < points.length; j++) {
      let [x2, y2] = points[j];
      points[j] = [];
      let s1 = (y2 - y1) / (x2 - x1);
      let count = 2;
      for (let k = 0; k < points.length; k++) {
        if (points[k].length == 0) continue;
        let [x3, y3] = points[k];
        let s2 = (y3 - y1) / (x3 - x1);
        if (s1 == s2) count++;
      }
      points[j] = [x2, y2];
      maxCount = Math.max(count, maxCount);
    }
    points[i] = [x1, y1];
  }
  return maxCount;
}

function test_00149() {
  console.log(maxPoints([[1, 1], [2, 2], [3, 3]]));
  console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));
  console.log(maxPoints([[0, 0], [2, 2], [-1, -1]]))
}

test_00149()
