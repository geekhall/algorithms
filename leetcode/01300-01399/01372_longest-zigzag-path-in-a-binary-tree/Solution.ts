/**
 * ID:    01372
 * Title: Longest ZigZag Path in a Binary Tree
 * Difficulty: Medium
 * Description: You are given the root of a binary tree.
 *
 * A ZigZag path for a binary tree is defined as follow:
 *
 * Choose any node in the binary tree and a direction (right or left).
 * If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
 * Change the direction from right to left or from left to right.
 * Repeat the second and third steps until you can't move in the tree.
 *
 * Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
 *
 * Return the longest ZigZag path contained in that tree.
 *
 * Example 1:
 *
 * Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1] Output: 3 Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
 *
 * Example 2:
 *
 * Input: root = [1,1,1,null,1,null,null,1,1,null,1] Output: 4 Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).
 *
 * Example 3:
 *
 * Input: root = [1] Output: 0
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 5 * 10 4 ].
 * 1 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"

function longestZigZag1(root: TreeNode | null): number {

  let max = 0
  /**
   *
   * @param node
   * @param direction -1 : left  1: right
   * @returns
   */
  const dfs = (node: TreeNode | null, direction: number): number => {
    let res = 0
    if (!node)
      return 0
    if (node.left === null && node.right === null) {
      return 1
    }
    let left = dfs(node.left, -direction)
    let right = dfs(node.right, -direction)

    if (direction === 1) {
      res = Math.max(left + 1, right)
    } else {
      res = Math.max(left, right + 1)
    }
    max = Math.max(max, res)
    return res
  }
  dfs(root, 1)
  dfs(root, -1)
  return max
};

function longestZigZag(root: TreeNode | null): number {

  let max = 0
  const dfs = (node: TreeNode | null, depth: number, direction: number) => {
    if (!node)
      return

    max = Math.max(max, depth)

    if (direction === 1) {
      dfs(node.left, depth + 1, -1)
      dfs(node.right, 1, 1)
    } else {
      dfs(node.left, 1, -1)
      dfs(node.right, depth + 1, 1)
    }
  }
  dfs(root, 0, 1)
  dfs(root, 0, -1)
  return max
}
function test_01372() {
  let root = TreeNode.create([1, null, 2, 3, 4, null, null, 5, 6, null, 7, null, null, null, 8, null, 9])
  let res = longestZigZag(root)
  console.log(res)
  root = TreeNode.create([1, 1, 1, null, 1, null, null, 1, 1, null, 1])
  res = longestZigZag(root)
  console.log(res)
  root = TreeNode.create([1])
  res = longestZigZag(root)
  console.log(res)
}

test_01372()
