/**
 * ID:    00513
 * Title: Find Bottom Left Tree Value
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the leftmost value in the last row of the tree.
 *
 * Example 1:
 *
 * Input: root = [2,1,3] Output: 1
 *
 * Example 2:
 *
 * Input: root = [1,2,3,4,null,5,6,null,null,7] Output: 7
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -2 31 <= Node.val <= 2 31 - 1
 */
import { TreeNode } from "../../utils/TreeNode"
function findBottomLeftValue(root: TreeNode | null): number {
  if (!root)
    return 0
  let queue = new Array()
  let bottom_left = root.val
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      if (i === 0) {
        bottom_left = cur.val
      }
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
  }

  return bottom_left
};
function test_00513() {
  let root = TreeNode.create([1, 2, 3, 4, null, 5, 6, null, null, 7])
  console.log(findBottomLeftValue(root));
  root = TreeNode.create([2, 1, 3])
  console.log(findBottomLeftValue(root));

}

test_00513()
