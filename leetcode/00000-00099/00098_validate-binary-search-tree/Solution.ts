/**
 * ID:    00098
 * Title: Validate Binary Search Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *
 * Input: root = [2,1,3] Output: true
 *
 * Example 2:
 *
 * Input: root = [5,1,4,null,null,3,6] Output: false Explanation: The root node's value is 5 but its right child's value is 4.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -2 31 <= Node.val <= 2 31 - 1
 */
import { TreeNode } from "../../utils/TreeNode"
function isValidBST(root: TreeNode | null): boolean {
  if (root === null)
    return true
  interface ReturnType {
    min: number
    max: number
    isBST: boolean
  }
  const dfs = (node: TreeNode): ReturnType => {
    let left: ReturnType, right: ReturnType
    let isBST = true, min = node.val, max = node.val

    if (node.left) {
      left = dfs(node.left)
      if (left.max >= node.val || left.isBST === false) {
        isBST = false
      }
      min = Math.min(left.min, min)
      max = Math.max(left.max, max)
    }

    if (node.right) {
      right = dfs(node.right)
      if (right.min <= node.val || right.isBST === false) {
        isBST = false
      }
      min = Math.min(right.min, min)
      max = Math.max(right.max, max)
    }
    return { min: min, max: max, isBST: isBST }
  }

  return dfs(root).isBST
};

function test_00098() {
  let root = TreeNode.create([2, 1, 3])
  console.log(isValidBST(root));
  root = TreeNode.create([5, 1, 4, null, null, 3, 6])
  console.log(isValidBST(root));

}

test_00098()
