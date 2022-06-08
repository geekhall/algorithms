/**
 * ID:    00515
 * Title: Find Largest Value in Each Tree Row
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 *
 * Example 1:
 *
 * Input: root = [1,3,2,5,3,null,9] Output: [1,3,9]
 *
 * Example 2:
 *
 * Input: root = [1,2,3] Output: [1,3]
 *
 * Constraints:
 *
 * The number of nodes in the tree will be in the range [0, 10 4 ].
 * -2 31 <= Node.val <= 2 31 - 1
 */
import { TreeNode } from "../../utils/TreeNode"
function largestValues(root: TreeNode | null): number[] {
  let largest_values = new Array()
  if (!root)
    return []
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    let level_max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      if (level_max < cur.val) {
        level_max = cur.val
      }
      if (i === size - 1) { // last node
        largest_values.push(level_max)
      }
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
  }
  return largest_values
};

function test_00515() {
  let root = TreeNode.create([1, 3, 2, 5, 3, null, 9])
  console.log(largestValues(root));
  root = TreeNode.create([1, 2, 3])
  console.log(largestValues(root));

}

test_00515()
