/**
 * ID:    00938
 * Title: Range Sum of BST
 * Difficulty: Easy
 * Description: Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
 *
 * Example 1:
 *
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15 Output: 32 Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
 *
 * Example 2:
 *
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10 Output: 23 Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 2 * 10 4 ].
 * 1 <= Node.val <= 10 5
 * 1 <= low <= high <= 10 5
 * All Node.val are unique.
 */

import { TreeNode, createTree, printTree } from "../../utils/TreeNode"

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let res = 0
  const dfs = (root: TreeNode | null) => {
    if (root === null)
      return
    dfs(root.left)
    if (root.val >= low && root.val <= high)
      res = res + root.val
    dfs(root.right)
  }
  dfs(root)
  return res
};

function test_00938() {
  let root = TreeNode.create([10, 5, 15, 3, 7, null, 18]), low = 7, high = 15
  console.log(rangeSumBST(root, low, high));

}

test_00938()
