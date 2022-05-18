/**
 * ID:    00530
 * Title: Minimum Absolute Difference in BST
 * Difficulty: Easy
 * Description: Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
 *
 * Example 1:
 *
 * Input: root = [4,2,6,1,3] Output: 1
 *
 * Example 2:
 *
 * Input: root = [1,0,48,null,null,12,49] Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 10 4 ].
 * 0 <= Node.val <= 10 5
 *
 * Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 */
import { TreeNode } from "../../utils/TreeNode"

function getMinimumDifference(root: TreeNode | null): number {
  let minimum = Number.MAX_VALUE
  interface ReturnType {
    min: number
    max: number
  }
  const process = (node: TreeNode): ReturnType => {
    if (node.left === null && node.right === null)
      return { min: node.val, max: node.val }
    let left, right, min = node.val, max = node.val
    if (node.left !== null) {
      left = process(node.left)
      min = left.min
      minimum = Math.min(node.val - left.max, minimum)
    }

    if (node.right !== null) {
      right = process(node.right)
      max = right.max
      minimum = Math.min(right.min - node.val, minimum)
    }
    return { min: min, max: max }
  }

  process(root!)
  return minimum
};

function test_00530() {
  let root = TreeNode.create([4, 2, 6, 1, 3])
  console.log(getMinimumDifference(root));
  root = TreeNode.create([8, 0, 42, null, null, 12, 49])
  console.log(getMinimumDifference(root));
}

test_00530()
