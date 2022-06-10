/**
 * ID:    00199
 * Title: Binary Tree Right Side View
 * Difficulty: Medium
 * Description: Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,5,null,4] Output: [1,3,4]
 *
 * Example 2:
 *
 * Input: root = [1,null,3] Output: [1,3]
 *
 * Example 3:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode";
function rightSideView(root: TreeNode | null): number[] {
  let res = new Array()
  if (!root)
    return []

  const queue = new Array<TreeNode>()
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()!
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
      if (i === size - 1) {  // most right node
        res.push(cur.val)
      }
    }
  }

  return res
};

function test_00199() {
  let root = TreeNode.create([1, 2, 3, null, 5, null, 4])
  let res = rightSideView(root)
  console.log(res);
}

test_00199()
