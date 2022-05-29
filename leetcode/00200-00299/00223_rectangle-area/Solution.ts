/**
 * ID:    00223
 * Title: Rectangle Area
 * Difficulty: Medium
 * Description: Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.
 *
 * The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).
 *
 * The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
 *
 * Example 1:
 *
 * Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2 Output: 45
 *
 * Example 2:
 *
 * Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2 Output: 16
 *
 * Constraints:
 *
 * -10 4 <= ax1, ay1, ax2, ay2, bx1, by1, bx2, by2 <= 10 4
 */
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number,
  bx1: number, by1: number, bx2: number, by2: number): number {
  if (ax1 >= bx2 || bx1 >= ax2 || ay1 >= by2 || by1 >= ay2) // no overlap
    return (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1)
  return (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1) -
    (Math.min(ax2, bx2) - Math.max(ax1, bx1)) * (Math.min(ay2, by2) - Math.max(ay1, by1))
}

function test_00223() {
  let ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
  console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))
  ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
  console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))

}

test_00223()
