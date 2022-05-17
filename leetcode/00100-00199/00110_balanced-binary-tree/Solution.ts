/**
 * ID:    00110
 * Title: Balanced Binary Tree
 * Difficulty: Easy
 * Description: Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 *
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,3,3,null,null,4,4] Output: false
 *
 * Example 3:
 *
 * Input: root = [] Output: true
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10 4 <= Node.val <= 10 4
 */
import { TreeNode, createTree, printTree } from "../../utils/TreeNode"
function isBalanced(root: TreeNode | null): boolean {
  if (root === null)
    return true
  interface ReturnType {
    isBalanced: boolean
    depth: number
  }
  const process = (root: TreeNode | null): ReturnType => {
    if (root === null)
      return { isBalanced: true, depth: 0 }
    let leftData = process(root.left)
    let rightData = process(root.right)
    let isBalanced = (leftData.isBalanced && rightData.isBalanced)
    if (Math.abs(leftData.depth - rightData.depth) > 1)
      isBalanced = false
    let depth = Math.max((leftData.depth), (rightData.depth)) + 1
    return { isBalanced: isBalanced, depth: depth }
  }

  return process(root).isBalanced
};

function test_00110() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(isBalanced(root));
  root = TreeNode.create([1, 2, 2, 3, 3, null, null, 4, 4])
  console.log(isBalanced(root));
}

test_00110()
