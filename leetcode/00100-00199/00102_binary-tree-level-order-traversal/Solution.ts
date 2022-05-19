/**
 * ID:    00102
 * Title: Binary Tree Level Order Traversal
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: [[3],[9,20],[15,7]]
 *
 * Example 2:
 *
 * Input: root = [1] Output: [[1]]
 *
 * Example 3:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode"
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null)
    return []
  let res: number[][] = new Array()
  const bfs = (node: TreeNode | null) => {
    let queue = new Array()
    queue.push(node)
    while (queue.length > 0) {
      let size = queue.length
      let level = new Array()
      for (let i = 0; i < size; i++) {
        let cur = queue.shift()
        // do something
        level.push(cur.val)
        if (cur.left)
          queue.push(cur.left)
        if (cur.right)
          queue.push(cur.right)
      }
      res.push(level)
    }
  }
  bfs(root)
  return res
};

function test_00102() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(levelOrder(root));
  root = TreeNode.create([1])
  console.log(levelOrder(root));
  root = TreeNode.create([])
  console.log(levelOrder(root));
}

test_00102()
