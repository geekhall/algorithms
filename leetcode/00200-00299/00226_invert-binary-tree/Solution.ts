/**
 * ID:    00226
 * Title: Invert Binary Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3,6,9] Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 *
 * Input: root = [2,1,3] Output: [2,3,1]
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
import { printTree, TreeNode } from "../../utils/TreeNode"
function invertTree(root: TreeNode | null): TreeNode | null {
  const bfs = (root: TreeNode | null) => {
    let queue = new Array()
    queue.push(root)
    while (queue.length > 0) {
      let cur = queue.shift()
      if (cur !== null) {
        reverse(cur)
        queue.push(cur.left)
        queue.push(cur.right)
      }
    }
  }

  const reverse = (root: TreeNode | null) => {
    if (root === null || (root.left === null && root.right === null))
      return
    let temp = root.left
    root.left = root.right
    root.right = temp
  }

  bfs(root)
  return root
};

function test_00226() {
  let root = TreeNode.create([4, 2, 7, 1, 3, 6, 9])
  printTree(invertTree(root))
  root = TreeNode.create([2, 1, 3])
  printTree(invertTree(root))
  root = TreeNode.create([])
  printTree(invertTree(root))

}

test_00226()
