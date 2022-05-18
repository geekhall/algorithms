/**
 * ID:    00257
 * Title: Binary Tree Paths
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,5] Output: ["1->2->5","1->3"]
 *
 * Example 2:
 *
 * Input: root = [1] Output: ["1"]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root)
    return []
  let res = new Array()
  const dfs = (node: TreeNode | null, currentPath: string | null) => {
    if (!node)
      return
    if (node.left === null && node.right === null) { // is leaf
      res.push(currentPath)
      return
    }
    if (node.left)
      dfs(node.left, currentPath + "->" + node.left!.val.toString())
    if (node.right)
      dfs(node.right, currentPath + "->" + node.right!.val.toString())
  }
  dfs(root, root!.val.toString())
  return res
};

function test_00257() {
  let root = TreeNode.create([1, 2, 3, null, 5])
  console.log(binaryTreePaths(root));
  root = TreeNode.create([1])
  console.log(binaryTreePaths(root));
}

test_00257()
