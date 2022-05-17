/**
 * ID:    00104
 * Title: Maximum Depth of Binary Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2] Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * -100 <= Node.val <= 100
 */
import { TreeNode, createTree, printTree } from "../../utils/TreeNode"

function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0

  const dfs = (root: TreeNode | null, depth: number) => {
    if (root === null)
      return
    maxDepth = Math.max(depth, maxDepth)
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 1)
  return maxDepth
};

function test_00104() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(maxDepth(root));
  root = TreeNode.create([1, null, 2])
  console.log(maxDepth(root));


}

test_00104()
