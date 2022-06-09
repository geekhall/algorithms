/**
 * ID:    00958
 * Title: Check Completeness of a Binary Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree, determine if it is a complete binary tree.
 *
 * In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2 h nodes inclusive at the last level h.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,6] Output: true Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
 *
 * Example 2:
 *
 * Input: root = [1,2,3,4,5,null,7] Output: false Explanation: The node with value 7 isn't as far left as possible.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 100].
 * 1 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode";
function isCompleteTree(root: TreeNode | null): boolean {
  let res = true
  if (root === null) {
    return true
  }
  let queue = [root]
  let leaf_flag = false
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!
      if (leaf_flag && (node.left || node.right)) {
        return false
      }
      if (!node.left && !node.right) {
        leaf_flag = true
      }

      if (node.left) {
        queue.push(node.left)
      } else {
        if (node.right) {
          return false
        }
      }
      if (node.right) {
        queue.push(node.right)
      } else {
        if (node.left) {
          leaf_flag = true // 当遇到一个只有左孩子没有右孩子的节点时，再之后的节点只能是叶节点。
        }
      }
    }
  }
  return res
};

function test_00958() {
  let root = TreeNode.create([1, 2, 3, 4, 5, 6])
  console.log(isCompleteTree(root));
  root = TreeNode.create([1, 2, 3, 4, 5, null, 7])
  console.log(isCompleteTree(root));
  root = TreeNode.create([1, 2, 3, 5, null, 7, 8])
  console.log(isCompleteTree(root));
  root = TreeNode.create([1, 2, 3, null, null, 7, 8])
  console.log(isCompleteTree(root));
}

test_00958()
