/**
 * ID:    00106
 * Title: Construct Binary Tree from Inorder and Postorder Traversal
 * Difficulty: Medium
 * Description: Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 *
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3] Output: [3,9,20,null,null,15,7]
 *
 * Example 2:
 *
 * Input: inorder = [-1], postorder = [-1] Output: [-1]
 *
 * Constraints:
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
 */
import { TreeNode } from "../../utils/TreeNode";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let res = null
  if (inorder === null || inorder.length === 0) {
    return res
  }
  const root = postorder[postorder.length - 1]
  const index = inorder.indexOf(root)
  const left = inorder.slice(0, index)
  const right = inorder.slice(index + 1)
  const left_postorder = postorder.slice(0, left.length)
  const right_postorder = postorder.slice(left.length, left.length + right.length)
  // console.log(left, right, left_postorder, right_postorder)
  res = new TreeNode(root)
  res.left = buildTree(left, left_postorder)
  res.right = buildTree(right, right_postorder)
  return res
};

function test_00106() {
  let inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
  let res = buildTree(inorder, postorder)
  TreeNode.print(res)
  inorder = [1, 2], postorder = [2, 1]
  res = buildTree(inorder, postorder)
  TreeNode.print(res)

}

test_00106()
