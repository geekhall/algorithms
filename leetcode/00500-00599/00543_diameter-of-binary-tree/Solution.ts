/**
 * ID:    00543
 * Title: Diameter of Binary Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return the length of the diameter of the tree.
 *
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5] Output: 3 Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Example 2:
 *
 * Input: root = [1,2] Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root)
    return 0
  let res = 0
  const dfs = (node: TreeNode | null): number => {
    if (!node)
      return -1

    let left = dfs(node.left) + 1
    let right = dfs(node.right) + 1
    res = Math.max(left + right, res)
    return Math.max(left, right)
  }
  dfs(root)
  return res
};

function test_00543() {
  let root = TreeNode.create([1, 2, 3, 4, 5])
  console.log(diameterOfBinaryTree(root));
  root = TreeNode.create([1, 2])
  console.log(diameterOfBinaryTree(root));

}

test_00543()
