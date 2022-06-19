/**
 * ID:    01654
 * Title: Minimum Jumps to Reach Home
 * Difficulty: Medium
 * Description: A certain bug's home is on the x-axis at position x. Help them get there from position 0.
 *
 * The bug jumps according to the following rules:
 *
 * It can jump exactly a positions forward (to the right).
 * It can jump exactly b positions backward (to the left).
 * It cannot jump backward twice in a row.
 * It cannot jump to any forbidden positions.
 *
 * The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.
 *
 * Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home. If there is no possible sequence of jumps that lands the bug on position x, return -1.
 *
 * Example 1:
 *
 * Input: forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9 Output: 3 Explanation: 3 jumps forward (0 -> 3 -> 6 -> 9) will get the bug home.
 *
 * Example 2:
 *
 * Input: forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11 Output: -1
 *
 * Example 3:
 *
 * Input: forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7 Output: 2 Explanation: One jump forward (0 -> 16) then one jump backward (16 -> 7) will get the bug home.
 *
 * Constraints:
 *
 * 1 <= forbidden.length <= 1000
 * 1 <= a, b, forbidden[i] <= 2000
 * 0 <= x <= 2000
 * All the elements in forbidden are distinct.
 * Position x is not forbidden.
 */
function minimumJumps(forbidden: number[], a: number, b: number, x: number): number {
  let steps = 0
  let furthest = a + b + x
  let queue = new Array()
  queue.push([0, 0]) // direction, postion
  let forward_set = new Set(forbidden)
  let backward_set = new Set(forbidden)
  for (let i = 0; i < forbidden.length; i++) {
    furthest = Math.max(furthest, forbidden[i] + a + b)
  }
  while (queue.length > 0) {
    let size = queue.length

    for (let i = queue.length; i > 0; i--) {
      let cur = queue.shift()!
      let direction = cur[0]
      let position = cur[1]
      if (position === x) {
        return steps
      }
      let forward = position + a
      if (forward <= furthest && !forward_set.has(forward)) {
        forward_set.add(forward)
        queue.push([0, forward])
      }
      let backward = position - b
      if (direction === 0 && backward >= 0 && !backward_set.has(backward)) {
        backward_set.add(backward)
        queue.push([1, backward])
      }
    }
    steps++
  }
  return -1
}

function test_01654() {
  let forbidden = [14, 4, 18, 1, 15], a = 3, b = 15, x = 9
  console.log(minimumJumps(forbidden, a, b, x))
  forbidden = [8, 3, 16, 6, 12, 20], a = 15, b = 13, x = 11
  console.log(minimumJumps(forbidden, a, b, x))
  forbidden = [1, 6, 2, 14, 5, 17, 4], a = 16, b = 9, x = 7
  console.log(minimumJumps(forbidden, a, b, x))
  forbidden = [128, 178, 147, 165, 63, 11, 150, 20, 158, 144, 136], a = 61, b = 170, x = 135
  console.log(minimumJumps(forbidden, a, b, x))
  forbidden = [18, 13, 3, 9, 8, 14], a = 3, b = 8, x = 6
  console.log(minimumJumps(forbidden, a, b, x)) // -1
  forbidden = [162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30, 124, 193, 84, 184,
    36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79, 157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176,
    16, 108, 111, 6, 168, 31, 134, 164, 136, 72, 98]
  a = 29, b = 98, x = 80
  console.log(minimumJumps(forbidden, a, b, x)) // -1

}

test_01654()
