/**
 * ID:    00105
 * Title: Construct Binary Tree from Preorder and Inorder Traversal
 * Difficulty: Medium
 * Description: Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 *
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7]
 *
 * Example 2:
 *
 * Input: preorder = [-1], inorder = [-1] Output: [-1]
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
 */
import { TreeNode } from "../../utils/TreeNode";
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let res = null
  if (preorder.length === 0) {
    return res
  }
  const root = preorder[0]
  const index = inorder.indexOf(root)
  const left = inorder.slice(0, index)
  const right = inorder.slice(index + 1)
  const left_preorder = preorder.slice(1, left.length + 1)
  const right_preorder = preorder.slice(left.length + 1)
  res = new TreeNode(root)
  res.left = buildTree(left_preorder, left)
  res.right = buildTree(right_preorder, right)

  return res
};

function test_00105() {
  let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
  let res = buildTree(preorder, inorder)
  TreeNode.print(res)
}

test_00105()
