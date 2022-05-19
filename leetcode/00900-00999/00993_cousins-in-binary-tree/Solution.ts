/**
 * ID:    00993
 * Title: Cousins in Binary Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.
 *
 * Two nodes of a binary tree are cousins if they have the same depth with different parents.
 *
 * Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4], x = 4, y = 3 Output: false
 *
 * Example 2:
 *
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4 Output: true
 *
 * Example 3:
 *
 * Input: root = [1,2,3,null,4], x = 2, y = 3 Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 1 <= Node.val <= 100
 * Each node has a unique value.
 * x != y
 * x and y are exist in the tree.
 */
import { TreeNode } from "../../utils/TreeNode"

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root)
    return false
  let m = new Map<number, Info>()
  interface Info {
    level: number
    parent: TreeNode | null
  }
  const dfs = (node: TreeNode | null, level: number) => {
    if (!node)
      return
    // do something
    if (node.left) {
      m.set(node.left.val, { level: level, parent: node })
      dfs(node.left, level + 1)
    }
    if (node.right) {
      m.set(node.right.val, { level: level, parent: node })
      dfs(node.right, level + 1)
    }
  }
  dfs(root, 1)

  return m.get(x)?.level === m.get(y)?.level && m.get(x)?.parent?.val !== m.get(y)?.parent?.val
};

function test_00993() {
  let root = TreeNode.create([1, 2, 3, 4]), x = 1, y = 2
  console.log(isCousins(root, x, y));
  root = TreeNode.create([1, 2, 3, null, 4, null, 5]), x = 5, y = 4
  console.log(isCousins(root, x, y));
  root = TreeNode.create([1, 2, 3, null, 4]), x = 2, y = 3
  console.log(isCousins(root, x, y));
}

test_00993()
