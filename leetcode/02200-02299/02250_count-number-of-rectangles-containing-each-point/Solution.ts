/**
 * ID:    02250
 * Title: Count Number of Rectangles Containing Each Point
 * Difficulty: Medium
 * Description: You are given a 2D integer array rectangles where rectangles[i] = [l i, h i ] indicates that i th rectangle has a length of l i and a height of h i. You are also given a 2D integer array points where points[j] = [x j, y j ] is a point with coordinates (x j, y j).
 * 
 * The i th rectangle has its bottom-left corner point at the coordinates (0, 0) and its top-right corner point at (l i, h i).
 * 
 * Return an integer array count of length points.length where count[j] is the number of rectangles that contain the j th point.
 * 
 * The i th rectangle contains the j th point if 0 <= x j <= l i and 0 <= y j <= h i. Note that points that lie on the edges of a rectangle are also considered to be contained by that rectangle.
 * 
 * Example 1:
 * 
 * Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]] Output: [2,1] Explanation: The first rectangle contains no points. The second rectangle contains only the point (2, 1). The third rectangle contains the points (2, 1) and (1, 4). The number of rectangles that contain the point (2, 1) is 2. The number of rectangles that contain the point (1, 4) is 1. Therefore, we return [2, 1].
 * 
 * Example 2:
 * 
 * Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]] Output: [1,3] Explanation: The first rectangle contains only the point (1, 1). The second rectangle contains only the point (1, 1). The third rectangle contains the points (1, 3) and (1, 1). The number of rectangles that contain the point (1, 3) is 1. The number of rectangles that contain the point (1, 1) is 3. Therefore, we return [1, 3].
 * 
 * Constraints:
 * 
 * 1 <= rectangles.length, points.length <= 5 * 10 4
 * rectangles[i].length == points[j].length == 2
 * 1 <= l i, x j <= 10 9
 * 1 <= h i, y j <= 100
 * All the rectangles are unique.
 * All the points are unique.
 */
function solution() {
  
}

function test_02250() {
  
}

test_02250()
